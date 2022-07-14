import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useMemo, useEffect } from "react";
import "./LinearChart.css";
import InfoRetriever from "../../../../../../hooks/InfoRetriever";

import React from "react";

export default function LinearChart() {
  const generatorcolor = [
    "#" + Math.trunc(Math.random() * 1000000),
    "#" + Math.trunc(Math.random() * 1000000),
    "#" + Math.trunc(Math.random() * 1000000),
    "#" + Math.trunc(Math.random() * 1000000),
  ];
  useEffect(() => {
    window.setInterval(function () {
      InfoRetriever();
    }, 1000);
  }, [generatorcolor]);
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
            {
              id: 3,
              label: "Sensor 3",
              data: [
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
              ],
              borderColor: generatorcolor[2],
              backgroundColor: generatorcolor[2],
            },
            {
              id: 4,
              label: "Sensor 4",
              data: [
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
                Math.trunc(Math.random() * 30),
              ],
              borderColor: generatorcolor[3],
              backgroundColor: generatorcolor[3],
            },
          ],
        }}
      />
    </div>
  );
}
