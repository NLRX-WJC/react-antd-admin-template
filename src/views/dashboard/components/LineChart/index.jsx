import React from "react";
import Chart from "@/components/Chart";
import { PropTypes } from "prop-types";

const LineChart = ({chartData}) => {

  const {expectedData, actualData} = chartData;

  const options = {
      backgroundColor: "#fff",
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        boundaryGap: false,
        axisTick: {
          show: false,
        },
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 30,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        padding: [5, 10],
      },
      yAxis: {
        axisTick: {
          show: false,
        },
      },
      legend: {
        data: ["expected", "actual"],
      },
      series: [
        {
          name: "expected",
          itemStyle: {
            
              color: "#FF005A",
              lineStyle: {
                color: "#FF005A",
                width: 2,
              },
            
          },
          smooth: true,
          type: "line",
          data: expectedData,
          animationDuration: 800,
          animationEasing: "cubicInOut",
        },
        {
          name: "actual",
          smooth: true,
          type: "line",
          itemStyle: {
            
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            
          },
          data: actualData,
          animationDuration: 800,
          animationEasing: "quadraticOut",
        },
      ],
    };
 
  return (
    <Chart options={options}/>
  );
}

LineChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
  chartData: PropTypes.object.isRequired,
};

// LineChart.defaultProps = {
//   height: "350px",
//   styles: {},
//   className: "",
// };

export default LineChart; //state.app
