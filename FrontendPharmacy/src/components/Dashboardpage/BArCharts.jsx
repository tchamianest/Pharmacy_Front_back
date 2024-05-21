import React from "react";
import { Bar } from "react-chartjs-2";

function BArCharts({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Product Available</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "product from different Pharmacy 2023-2024",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default BArCharts;
