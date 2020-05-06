import React from "react";
import Chart from "@/components/Charts/keyboard.jsx";
const KeyboardChart = () => {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 64px)" }} className="app-container">
      <Chart height="100%" width="100%" />
    </div>
  );
};

export default KeyboardChart;
