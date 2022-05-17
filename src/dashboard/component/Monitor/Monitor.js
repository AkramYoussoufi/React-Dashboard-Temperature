import "./Monitor.css";
import HardwareAction from "./component/Action/HardwareAction";
import HardwareCharts from "./component/Charts/HardwareCharts";
import Hardwaretable from "./component/Table/Hardwaretable";

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
      <div className="dashboard--content--actions">
        <HardwareAction />
      </div>
      <div className="dashboard--content--table">
        <Hardwaretable />
      </div>
    </div>
  );
}

export default Monitor;
