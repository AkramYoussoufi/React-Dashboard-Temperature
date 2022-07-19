import "./HardwareCharts.css";
import LinearChart from "./components/LinearChart";
import { useState } from "react";

function HardwareCharts(props) {
  const triggredalarm = [...JSON.parse(sessionStorage.triggredalarm)];
  return (
    <div className="chart--container">
      <div className="chart">
        <LinearChart sentindex={props.sentindex} />
      </div>
      <div className="sensor-details">
        <div className="title--log">
          <div>Alarm Log</div>
        </div>
        <div className="box-text1">
          {triggredalarm[0] ? (
            triggredalarm.map((x) => {
              return (
                <div>
                  <div className="detailstrigger">
                    <b>{x.detail}</b>
                    <br />
                    <br />
                    <b>DETAILS :</b>
                    <br />
                    <br />
                    Triggred Sensor : <b>{x.sensorName} </b> <br />
                    Triggred Sensor ID : <b>{x.sensorId} </b>
                    <br />
                    Triggred Value : <b>{x.value} </b>
                    <br /> Number of Triggers : <b>{x.alramNumber}</b>
                  </div>
                </div>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default HardwareCharts;
