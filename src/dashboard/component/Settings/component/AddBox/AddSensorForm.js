import React from "react";
import "./AddSensorForm.css";

export default function AddSensorForm(props) {
  return (
    <div className="AddSensorForm">
      <div className="AddSensorFormContainer">
        <div className="formInfo">
          <div className="title-left-side">INFORMATION</div>
          <div className="infocontainer">
            <div className="title">Inputs Status</div>
            <div className="infotext">
              <span>
                These are the inputs status that are <b>used</b> or{" "}
                <b>availble</b> :
              </span>
              <ul className="inputlistcontroler">
                <li className="inputlist">DUMP NAME (dump statu)</li>
                <li className="inputlist">DUMP NAME (dump statu)</li>
                <li className="inputlist">DUMP NAME (dump statu)</li>
                <li className="inputlist">DUMP NAME (dump statu)</li>
              </ul>
              <span>
                You can only use the <b>availble</b> inputs.
              </span>
            </div>
            <div className="leave--btn--addsensor">
              <button
                onClick={() => {
                  props.setShowForm({ display: "none" });
                }}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
        <div className="formInput">
          <div className="formInput--title">ADD YOUR SENSOR</div>
          <div className="formInput--form">
            <form>
              <div className="selectinput">
                <div>
                  <label>SELECT INPUT</label>
                </div>
                <div>
                  <select></select>
                </div>
              </div>
              <div className="sensornameinput">
                <div>
                  <label>SENSOR NAME</label>
                </div>
                <div>
                  <input />
                </div>
              </div>
              <div className="button--add--sensor">
                <div>
                  <input type="submit" value="COMPLETE" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
