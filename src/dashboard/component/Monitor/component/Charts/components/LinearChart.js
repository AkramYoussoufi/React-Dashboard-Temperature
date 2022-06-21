import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useMemo } from "react";
import "./LinearChart.css";

import React from "react";

export default function LinearChart() {
  const generatorcolor = [
    "#" + Math.trunc(Math.random() * 1000000),
    "#" + Math.trunc(Math.random() * 1000000),
  ];
  return (
    <div className="mychart">
      {" "}
      <Chart
        style={{ width: "450px" }}
        type="line"
        datasetIdKey="id"
        data={{
          labels: ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"],
          mini: 0,
          max: 30,
          datasets: [
            {
              id: 1,
              label: "Sensor 1",
              data: [
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
              ],
              borderColor: generatorcolor[0],
              backgroundColor: generatorcolor[0],
            },
            {
              id: 2,
              label: "Sensor 2",
              data: [
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
              ],
              borderColor: generatorcolor[1],
              backgroundColor: generatorcolor[1],
            },
          ],
        }}
      />
    </div>
  );
}
