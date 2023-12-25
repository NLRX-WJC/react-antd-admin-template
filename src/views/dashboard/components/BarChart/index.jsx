import React from "react";
import Chart from "@/components/Chart";
import { PropTypes } from "prop-types";


const BarChart = (props) => {
  const animationDuration = 3000;
  const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        top: 10,
        left: "2%",
        right: "2%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [{
        type: "value",
        axisTick: {
          show: false,
        },
      },
      ],
      series: [
        {
          name: "pageA",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration,
        },
        {
          name: "pageB",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration,
        },
        {
          name: "pageC",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration,
        },
      ],
    };
  
  const { className, height, width, styles } = props;
  return (
    <div
      className={className}
      style={{
        ...styles,
        height,
        width,
      }}
    >
      <Chart options = {options}/>
    </div>
  );
}

BarChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
};

BarChart.defaultProps = {
  width: "100%",
  height: "300px",
  styles: {},
  className: "",
};

export default BarChart;
