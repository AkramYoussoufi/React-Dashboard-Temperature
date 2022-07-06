import "./Settings.css";
import Sensors from "./component/Sensors/Sensors";
import AlarmProfile from "./component/AlarmProfile/AlarmProfile";
import { useState } from "react";
import AlarmProfileSettings from "./component/AlarmProfile/AlarmProfileSettings";
import SensorsSettings from "./component/Sensors/SensorsSettings";

function Settings() {
  const [showForm, setShowForm] = useState({ display: "none" });
  const [settingsPanel, setSettingsPanel] = useState(false);
  const showpanel = function (what) {
    setSettingsPanel(what);
  };
  return (
    <div className="settings-content">
      <div className="settings-content-container">
        <div className="addbox" style={showForm}>
          {" "}
        </div>
        <div className="settings-side-bar">
          <div className="side-bar-header">
            <div>Sensors & Alarm Profile</div>
          </div>
          <div className="side-bar-sensors">
            <ul>
              <div className="list--title">Sensors</div>
              <Sensors showpanel={showpanel} />
              <div className="list--title">Alarm Profile</div>
              <AlarmProfile showpanel={showpanel} />
            </ul>
          </div>
        </div>
        <div className="settings-options">
          <div className="options-header">Settings</div>
          <div className="options-sensors">
            {settingsPanel ? <AlarmProfileSettings /> : <SensorsSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
