import "./SensorsSettings.css";
import arrowdown from "./white-down-arrow-png-2.png";

export default function SensorsSettings() {
  return (
    <div className="boxpanel--sensor">
      <div className="boxpanel--container">
        <div className="disable--container">
          <div className="disable--dropdown">
            <div className="text">Disable Sensor</div>
            <div className="arrowdown">
              <div>
                <img src={arrowdown}></img>
              </div>
            </div>
          </div>
          <div className="thedropdown"></div>
        </div>
        <div className="delete--container">
          <div className="delete--dropdown">
            <div className="text">Delete Sensor</div>
            <div className="arrowdown">
              <div>
                <img src={arrowdown}></img>
              </div>
            </div>
          </div>
          <div className="thedropdown"></div>
        </div>
        <div className="update--container">
          <div className="update--dropdown"></div>
        </div>
      </div>
    </div>
  );
}
