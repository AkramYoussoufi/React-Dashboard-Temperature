import "./SensorsSettings.css";
import arrowdown from "./white-down-arrow-png-2.png";
import { useState, useEffect } from "react";
import axios from "../../../../../api/axios";
import InfoRetriever from "../../../../../hooks/InfoRetriever";

export default function SensorsSettings(props) {
  const [DropDownDisable, setDropDownDisable] = useState({ height: "0px" });
  const [DropDownDelete, setDropDownDelete] = useState({ height: "0px" });
  const inputs = [...JSON.parse(sessionStorage.userInputs)];
  const sensors = [...JSON.parse(sessionStorage.userSensors)];
  const alarmProfile = [
    { name: "" },
    ...JSON.parse(sessionStorage.alarmProfile),
  ];

  const [sensorUpdate, setSensorUpdate] = useState({
    name: "",
    alarmProfile: "",
    Input: "",
    Delay: "",
  });

  return (
    <div className="boxpanel--sensor">
      <div className="boxpanel--container">
        <div className="disable--container">
          <div
            className="disable--dropdown"
            onClick={() => {
              if (DropDownDisable.height === "0px") {
                setDropDownDisable({ height: "100%" });
                setDropDownDelete({ height: "0px" });
              } else {
                setDropDownDisable({ height: "0px" });
              }
            }}
          >
            <div className="text">Disable Sensor</div>
            <div className="arrowdown">
              <div>
                <img src={arrowdown}></img>
              </div>
            </div>
          </div>
          <div className="thedropdown" style={DropDownDisable}>
            <div className="text">
              ARE YOU SURE YOU WANNA DISABLE THIS SENSOR ?
            </div>
            <div className="button--disable--enable">
              <button
                onClick={async () => {
                  axios
                    .post(
                      "/api/Sensors/ActivateDeactivateSensor",

                      {
                        id: sensors[props.indexof].id,
                        isActive: true,
                      }
                    )
                    .then(function (response) {
                      console.log(response);
                      window.location.reload();
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                DISABLE
              </button>
            </div>
          </div>
        </div>
        <div className="delete--container">
          <div
            className="delete--dropdown"
            onClick={() => {
              if (DropDownDelete.height === "0px") {
                setDropDownDelete({ height: "100%" });
                setDropDownDisable({ height: "0px" });
              } else {
                setDropDownDelete({ height: "0px" });
              }
            }}
          >
            <div className="text">Delete Sensor</div>
            <div className="arrowdown">
              <div>
                <img src={arrowdown}></img>
              </div>
            </div>
          </div>
          <div className="thedropdown" style={DropDownDelete}>
            <div className="text">
              ARE YOU SURE YOU WANNA DELETE THIS SENSOR ?
            </div>
            <div className="button--disable--enable">
              <button
                onClick={async () => {
                  axios
                    .delete("/api/Sensors/" + sensors[props.indexof].id)
                    .then(function (response) {
                      console.log(response);
                      window.location.reload();
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
        <div className="update--container">
          <div className="update--dropdown">
            <div className="container--info">
              <h2 className="title--info">Inputs Status</h2>
              <h5 className="title--info">
                Here you can update your sensor please make sure to choose the
                right sensor and fill the form to processed your update
              </h5>
              <div className="text--info">
                <span>
                  These are the inputs status that are <b>used</b> or{" "}
                  <b>availble</b> :
                </span>
                <ul className="inputlistcontroler">
                  <li className="inputlist">
                    {inputs[0].isUsed ? (
                      <span className="cercle-red"></span>
                    ) : (
                      <span className="cercle-green"></span>
                    )}
                    {inputs[0].id}
                  </li>
                  <li className="inputlist">
                    {inputs[1].isUsed ? (
                      <span className="cercle-red"></span>
                    ) : (
                      <span className="cercle-green"></span>
                    )}
                    {inputs[1].id}
                  </li>
                  <li className="inputlist">
                    {inputs[2].isUsed ? (
                      <span className="cercle-red"></span>
                    ) : (
                      <span className="cercle-green"></span>
                    )}
                    {inputs[2].id}
                  </li>
                  <li className="inputlist">
                    {inputs[3].isUsed ? (
                      <span className="cercle-red"></span>
                    ) : (
                      <span className="cercle-green"></span>
                    )}
                    {inputs[3].id}
                  </li>
                </ul>
                <span>
                  You can only use the <b>availble</b> inputs which are{" "}
                  <b style={{ color: "#6cdb04" }}>green</b>.
                </span>
              </div>
            </div>
            <div className="form--update--sensor">
              <form>
                <div className="form--labelinput--container">
                  <label>Sensor Name</label>
                  <input
                    onChange={(e) => {
                      setSensorUpdate({
                        ...sensorUpdate,
                        name: e.currentTarget.value,
                      });
                    }}
                  />{" "}
                  <label>Select Alarm Profile</label>{" "}
                  <select
                    onChange={(e) => {
                      setSensorUpdate({
                        ...sensorUpdate,
                        alarmProfile: e.currentTarget.value,
                      });
                    }}
                  >
                    {" "}
                    {alarmProfile.map((x) => (
                      <option key={x.id}>{x.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form--labelinput--container">
                  <label>Select Input</label>
                  <select
                    onChange={(e) => {
                      setSensorUpdate({
                        ...sensorUpdate,
                        Input: e.currentTarget.value,
                      });
                    }}
                  >
                    {" "}
                    <option></option>
                    <option value={inputs[0].id} disabled={inputs[0].isUsed}>
                      {inputs[0].id}
                    </option>
                    <option value={inputs[1].id} disabled={inputs[1].isUsed}>
                      {inputs[1].id}
                    </option>
                    <option value={inputs[2].id} disabled={inputs[2].isUsed}>
                      {inputs[2].id}
                    </option>
                    <option value={inputs[3].id} disabled={inputs[3].isUsed}>
                      {inputs[3].id}
                    </option>
                  </select>

                  <label>Select Delay</label>
                  <select
                    onChange={(e) => {
                      setSensorUpdate({
                        ...sensorUpdate,
                        Delay: parseInt(e.currentTarget.value),
                      });
                    }}
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>{" "}
                <div className="button--update--sensor" id="sensor">
                  <button
                    onClick={async () => {
                      axios
                        .put("/api/Sensors/" + sensors[props.indexof].id, {
                          id: sensors[props.indexof].id,
                          inputId: sensorUpdate.Input,
                          name: sensorUpdate.name,
                          delay: sensorUpdate.Delay,
                          alarmProfileId:
                            alarmProfile[
                              alarmProfile.findIndex((object) => {
                                return (
                                  object.name === sensorUpdate.alarmProfile
                                );
                              })
                            ].id,
                        })
                        .then(function (response) {
                          console.log(response);
                          InfoRetriever();
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                    }}
                    style={
                      Object.values(sensorUpdate).every((x) => x !== "")
                        ? {}
                        : { opacity: "0.5", pointerEvents: "none" }
                    }
                  >
                    UPDATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
