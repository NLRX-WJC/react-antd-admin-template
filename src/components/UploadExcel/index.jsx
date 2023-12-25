import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Upload, message } from "antd";
import Icon from '@ant-design/icons'
import * as icons from '@ant-design/icons';

import * as XLSX from "xlsx";

// import * as XLSX from 'xlsx';

// /* load 'fs' for readFile and writeFile support */
// import * as fs from 'fs';
// XLSX.set_fs(fs);

// /* load 'stream' for stream support */
// import { Readable } from 'stream';
// XLSX.stream.set_readable(Readable);

// /* load the codepage support library for extended support with older formats  */
// import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
// XLSX.set_cptable(cpexcel);


const { Dragger } = Upload;

const getHeaderRow = (sheet) => {
  const headers = [];
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  let C;
  const R = range.s.r;
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
    /* find the cell in the first row */
    let hdr = "UNKNOWN " + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
    headers.push(hdr);
  }
  return headers;
};
const isExcel = (file) => {
  return /\.(xlsx|xls|csv)$/.test(file.name);
};

const UploadExcel = (props) => {

  const [state, setState] = useState({
    loading: false,
    excelData: {
      header: null,
      results: null,
    },
  });


  const draggerProps = () => {
    return {
      name: "file",
      multiple: false,
      accept: ".xlsx, .xls",
      onChange(info) {
        const { status } = info.file;
        if (status === "done") {
          message.success(`${info.file.name} 文件上传成功`);
        } else if (status === "error") {
          message.error(`${info.file.name} 文件上传失败`);
        }
      },
      beforeUpload(file, fileList) {
        if (!isExcel(file)) {
          message.error("仅支持上传.xlsx, .xls, .csv 文件");
          return false;
        }
      },
      customRequest(e) {
        readerData(e.file).then(() => {
          e.onSuccess();
        });
      }
    };
  };
  const readerData = (rawFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const header = getHeaderRow(worksheet);
        const results = XLSX.utils.sheet_to_json(worksheet);
        generateData({ header, results });
        resolve();
      };
      reader.readAsArrayBuffer(rawFile);
    });
  };
  const generateData = ({ header, results }) => {
    setState({
      excelData: { header, results },
    });
    props.uploadSuccess && props.uploadSuccess(state.excelData);
  };
  return (
    <div>
      <Dragger {...draggerProps()}>
        <p className="ant-upload-drag-icon">
          <Icon component={icons["InboxOutlined"]} />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </div>
  );
}

UploadExcel.propTypes = {
  uploadSuccess: PropTypes.func.isRequired,
};

export default UploadExcel;
