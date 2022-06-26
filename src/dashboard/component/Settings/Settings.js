import "./Settings.css";
import plus from "./add.png";
import Sensors from "./component/Sensors/Sensors";
import AddSensorForm from "./component/AddBox/AddSensorForm";
import { useState } from "react";

function Settings() {
  const [showForm, setShowForm] = useState({ display: "none" });
  return (
    <div className="settings-content">
      <div className="settings-content-container">
        <div className="addbox" style={showForm}>
          {" "}
          <AddSensorForm setShowForm={setShowForm} />
        </div>
        <div className="settings-side-bar">
          <div className="side-bar-header">
            <div>Sensors</div>
            <button
              className="button-add-sensor"
              onClick={() => {
                setShowForm({ display: "block" });
              }}
            >
              <img src={plus}></img>
            </button>
          </div>
          <div className="side-bar-sensors">
            <ul>
              <Sensors />
            </ul>
          </div>
        </div>
        <div className="settings-options">
          <div className="options-header">Settings</div>
          <div className="options-sensors"></div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
