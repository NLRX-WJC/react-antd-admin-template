import React from "react";
import Chart from "@/components/Chart";
import { PropTypes } from "prop-types";



const PieChart = (props) => {


    const animationDuration = 3000;
 const options = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
      },
      calculable: true,
      series: [
        {
          name: "WEEKLY WRITE ARTICLES",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: [
            { value: 320, name: "Industries" },
            { value: 240, name: "Technology" },
            { value: 149, name: "Forex" },
            { value: 100, name: "Gold" },
            { value: 59, name: "Forecasts" },
          ],
          animationEasing: "cubicInOut",
          animationDuration
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
      <Chart options = {options} />
      </div> 
  );
}

PieChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
};

PieChart.defaultProps = {
  width: "100%",
  height: "300px",
  styles: {},
  className: "",
};

export default PieChart;
