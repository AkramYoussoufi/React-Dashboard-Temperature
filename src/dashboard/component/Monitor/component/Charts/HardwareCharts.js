import "./HardwareCharts.css";
import LinearChart from "./components/LinearChart";
import { useEffect } from "react";
import InfoRetriever from "../../../../../hooks/InfoRetriever";

function HardwareCharts() {
  useEffect(() => {
    window.setInterval(function () {
      InfoRetriever();
    }, 1000);
  });
  return (
    <div className="chart--container">
      <div className="chart">
        <LinearChart />
      </div>
      <div className="sensor-details">
        <div className="box-text1">
          <div>Id: n/a</div>
          <div>Alarm Delay: n/a</div>
          <div>Upper Alarm Limit: n/a</div>
          <div>Lower Alarm Limit: n/a</div>
          <div>Highest Value: n/a</div>
          <div>Lowest Value: n/a</div>
          <div>Average Value: n/a</div>
          <div>MKT: n/a</div>
        </div>
        <div className="box-text2">
          <div></div>
          <div>Logging Interval: n/a</div>
          <div>Total Time Above Limit: n/a</div>
          <div>Total Time Below Limit: n/a</div>
          <div>Sensor Alarms: n/a</div>
          <div>Sensor Warnings: n/a</div>
          <div>Sensor Issues: n/a</div>
          <div>System Issues: n/a</div>
        </div>
      </div>
    </div>
  );
}

export default HardwareCharts;
