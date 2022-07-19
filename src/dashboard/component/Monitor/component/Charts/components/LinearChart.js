import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useMemo, useEffect, useState } from "react";
import "./LinearChart.css";
import InfoRetriever from "../../../../../../hooks/InfoRetriever";
import axios from "../../../../../../api/axios";

import React from "react";

export default function LinearChart(props) {
  const [mesurement, setMesurement] = useState([]);
  const [date, setDate] = useState([]);
  const retrieveMesurement = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44304/api/Sensors/" +
          JSON.parse(sessionStorage.userSensors)[props.sentindex].id
      );
      setMesurement(
        response.data.result.measurements.map((x) => {
          return x.value;
        })
      );
      setDate(
        response.data.result.measurements.map((x) => {
          return (
            new Date(x.timestamp).getHours() +
            ":" +
            new Date(x.timestamp).getMinutes()
          );
        })
      );
      console.log(date);
    } catch {}
  };
  useEffect(() => {
    retrieveMesurement();
  }, [props.sentindex]);

  const generatorcolor = ["#619ED5"];
  return JSON.parse(sessionStorage.userSensors)[0] ? (
    <div className="mychart" onClick={retrieveMesurement}>
      {" "}
      <Chart
        style={{ width: "450px" }}
        type="line"
        datasetIdKey="id"
        data={{
          labels: [
            date[9],
            date[8],
            date[7],
            date[6],
            date[5],
            date[4],
            date[3],
            date[2],
            date[1],
            date[0],
          ],
          mini: 0,
          max: 50,
          datasets: [
            {
              id: 1,
              label: JSON.parse(sessionStorage.userSensors)[props.sentindex]
                .name,
              data: [
                mesurement[9],
                mesurement[8],
                mesurement[7],
                mesurement[6],
                mesurement[5],
                mesurement[4],
                mesurement[3],
                mesurement[2],
                mesurement[1],
                mesurement[0],
              ],
              borderColor: generatorcolor[0],
              backgroundColor: generatorcolor[0],
            },
          ],
        }}
      />
    </div>
  ) : (
    <div className="mychart" onClick={retrieveMesurement}>
      {" "}
      <Chart
        style={{ width: "450px" }}
        type="line"
        datasetIdKey="id"
        data={{
          labels: [],
          mini: 0,
          max: 50,
          datasets: [
            {
              id: 1,
              label: "",
              data: [],
              borderColor: generatorcolor[0],
              backgroundColor: generatorcolor[0],
            },
          ],
        }}
      />
    </div>
  );
}
