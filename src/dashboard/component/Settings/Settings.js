import "./Settings.css";
import plus from "./Flat_plus_icon.svg.png";

function Settings() {
  return (
    <div className="settings-content">
      <div className="settings-content-container">
        <div className="settings-side-bar">
          <div className="side-bar-header">
            <div>Settings</div>
            <button className="button-add-sensor">
              <img src={plus}></img>
            </button>
          </div>
          <div className="side-bar-sensors"></div>
        </div>
        <div className="settings-options">
          <div className="options-header">Sensors</div>
          <div className="options-sensors"></div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
