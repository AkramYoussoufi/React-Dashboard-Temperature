import "./Monitor.css";
import HardwareCharts from "./component/Charts/HardwareCharts";
import Hardwaretable from "./component/Table/Hardwaretable";
import HardwareAction from "./component/Action/HardwareAction";
import { useState } from "react";

/* ADD HARDWARE LIST SORTER AND HARDWARE LIST ADDED TO SEPARATE COMPONENET
AND IT MUST BE A TABLE
*/
/* AND DO THE SAME FOR OPTION HARDWARE NEXT*/

function Monitor() {
  const [indexrow, setIndexRow] = useState(0);
  const index = (index) => {
    setIndexRow(index);
  };
  return (
    <div className="dashboard--content">
      <div className="dashboard--content--charts">
        <HardwareCharts sentindex={indexrow} />
      </div>
      <div className="dashboard--add--sensor">
        <HardwareAction />
      </div>
      <div className="dashboard--content--table">
        <Hardwaretable getindex={index} />
      </div>
    </div>
  );
}

export default Monitor;
