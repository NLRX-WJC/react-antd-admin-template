import React, { Component } from 'react';
import { Card, Row, Col } from 'antd'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./index.less"
class RichTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() { 
    const { editorState } = this.state;
    return ( 
      <div>
        <Card bordered={false}>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            localization={{ locale: 'zh'}}
          />
        </Card>
        <br/>
        <Row gutter={10}>
          <Col span={12}>
            <Card title='同步转换HTML' bordered={false} style={{minHeight:200}}>
              {editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </Card>
          </Col>
          <Col span={12}>
            <Card title='同步转换MarkDown' bordered={false} style={{minHeight:200}}>
              {editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
            </Card>
          </Col>
        </Row>
      </div>
     );
  }
}

export default RichTextEditor;