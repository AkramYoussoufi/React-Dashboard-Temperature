import "./Monitor.css";
import HardwareCharts from "./component/Charts/HardwareCharts";
import Hardwaretable from "./component/Table/Hardwaretable";
import HardwareAction from "./component/Action/HardwareAction";

/* ADD HARDWARE LIST SORTER AND HARDWARE LIST ADDED TO SEPARATE COMPONENET
AND IT MUST BE A TABLE
*/
/* AND DO THE SAME FOR OPTION HARDWARE NEXT*/

function Monitor() {
  return (
    <div className="dashboard--content">
      <div className="dashboard--content--charts">
        <HardwareCharts />
      </div>
      <div className="dashboard--add--sensor">
        <HardwareAction />
      </div>
      <div className="dashboard--content--table">
        <Hardwaretable />
      </div>
    </div>
  );
}

export default Monitor;
