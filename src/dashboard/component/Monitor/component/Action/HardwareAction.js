import "./HardwareAction.css";
import { useState, useEffect } from "react";
import axios from "../../../../../api/axios";
import InfoRetriever from "../../../../../hooks/InfoRetriever";

function HardwareAction() {
  //VARIABLES FOR ANIMATIONS
  const [window, Setwindow] = useState({ transform: "translateY(-100%)" });
  const [inputpointer, Setinputpointer] = useState(2);
  const [input1, Setinput1] = useState({});
  const [input2, Setinput2] = useState({});
  const [addbutton, Setaddbutton] = useState("Next");
  const [addbuttonstyle, Setaddbuttonstyle] = useState({});
  const [isAlarmSelected, SetisAlarmSelected] = useState(false);
  const [errMsg, setErrMsg] = useState({ active: false, message: "" });

  const [alarmProfileInputs, setAlarmProfileInputs] = useState({
    name: "",
    upperLimite: 0,
    lowerLimites: 0,
  });

  const alarmProfile = [{name:''},...JSON.parse(sessionStorage.alarmProfile)];
  const inputs = [...JSON.parse(sessionStorage.userInputs)];

  const [sensorInputs, setSensorInputs] = useState({
    inputId: null,
    name: null,
    delay: null,
    alarmProfileId: "",
  });

  console.log(sensorInputs)

  //VARIABLES FOR AXIOS
  const nextinput = function () {
    switch (inputpointer) {
      case 1:
        {
          //SubmitHandlerAddAlarmProfile();
          Setinput1({ transform: "translateX(0%)" });
          Setinput2({ transform: "translateX(-200%)" });
          Setaddbuttonstyle({});
          Setinputpointer(2);
          InfoRetriever();
        }
        break;
      case 2:
        if (
          (Object.values(alarmProfileInputs).every(
            (x) => x !== null && x !== "" && x !== 0
          ) &&
            alarmProfileInputs.upperLimite > alarmProfileInputs.lowerLimites) ||
          isAlarmSelected
        ) {
          if (!isAlarmSelected) {
            SubmitHandlerAddAlarmProfile();
          }
          InfoRetriever();
          Setinput1({ transform: "translateX(200%)" });
          Setinput2({ transform: "translateX(0%)" });
          Setaddbutton("Done");
          Setaddbuttonstyle({
            background: "#7DC72D",
            color: "white",
            border: "none",
          });
        }

        break;
    }
  };

  const previnput = function () {
    if (inputpointer === 2) {
      Setinput1({ transform: "translateX(0%)" });
      Setinput2({ transform: "translateX(-200%)" });
      Setinputpointer(2);
      Setaddbutton("Next");
      Setaddbuttonstyle({});
      InfoRetriever();
    }
  };

  const SubmitHandlerAddAlarmProfile = async () => {
    try {
      const response = await axios.post(
        "api/AlarmProfiles",
        alarmProfileInputs
      );
      InfoRetriever();
    } catch (err) {
      if (err) {
        setErrMsg({ active: true, message: err });
      } else {
        setErrMsg({ active: false, message: err });
      }
      InfoRetriever();
    }
  };

  const SubmitHandlerAddSensor = async () => {
    try {
      const response = await axios.post("api/Sensors", sensorInputs);
      InfoRetriever();
      setErrMsg({ active: false });
      Setwindow({ transform: "translateY(-100%)" });
    } catch (err) {
      setErrMsg({
        active: true,
        message:
          "Sensor Name already exist please chose another one or delete the old one",
      });
      InfoRetriever();
    }
  };

  return (
    <div className="action--container">
      <div className="overlay--add--container"></div>
      <div className="window--add--container" style={window}>
        {" "}
        <div className="side-info-add-sensor">
          <div className="infocontainer">
            <div className="title">Inputs Status</div>
            <div className="infotext">
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
            <div className="leave--btn--addsensor">
              <button
                onClick={() => {
                  Setwindow({ transform: "translateY(-100%)" });
                  InfoRetriever();
                }}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
        <div className="window--add--box">
          <h1>Add Your Sensor</h1>
          <div className="form-add-sensor">
            {" "}
            <form>
              <div className="add-alarm-form" style={input1}>
                <div
                  className="errMsg--alarm"
                  style={{ height: errMsg.active ? "100%" : "0px" }}
                >
                  <div className="msgbackground"></div>
                  <div className="message">
                    <div>{errMsg.message}</div>
                  </div>
                </div>
                <div className="alarm-name-input-box">
                  <label htmlFor="alarmName">Alarm Name</label>
                  <input
                    type="text"
                    id="alarmName"
                    name="alarmName"
                    style={isAlarmSelected ? { opacity: "0.5" } : {}}
                    disabled={isAlarmSelected}
                    onChange={(e) => {
                      setAlarmProfileInputs({
                        ...alarmProfileInputs,
                        name: e.target.value,
                      });
                      if (
                        alarmProfile.findIndex((x) => {
                          return  e.target.value !== x.name;
                        }) && !alarmProfileInputs.name
                      ) {
                        setErrMsg({
                          active: true,
                          message:
                            "The Alarm Name you typed is already exist you can select it in the drop down menu",
                        });
                      } else {
                        setErrMsg({
                          active: false,
                        });
                      }
                    }}
                  />
                  <div>
                    <span style={{ color: "red" }}>OR</span>
                  </div>
                  <label htmlFor="selectAlarm">Select Alarm</label>
                  <select
                    type="text"
                    id="selectAlarm"
                    name="selectAlarm"
                    onChange={(e) => {
                      if (
                        document.querySelector("select#selectAlarm")
                          .selectedIndex === 0
                      ) {
                        SetisAlarmSelected(false);
                      } else {
                        SetisAlarmSelected(true);
                        document.querySelector("input#alarmName").value = "";
                        document.querySelector("input#upperLimit").value = 0;
                        document.querySelector("input#lowerLimit").value = 0;
                      }
                    }}
                  >
                    {alarmProfile.map((x) => (
                      <option key={x.id}>{x.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <div>
                    <label htmlFor="upperLimit">Upper Limit</label>
                    <input
                      className="upperlower--input"
                      type="number"
                      id="upperLimit"
                      name="upperLimit"
                      disabled={isAlarmSelected}
                      style={isAlarmSelected ? { opacity: "0.5" } : {}}
                      onChange={(e) => {
                        setAlarmProfileInputs({
                          ...alarmProfileInputs,
                          upperLimite: parseInt(e.target.value),
                        });
                        if (
                          parseInt(e.target.value) <=
                          alarmProfileInputs.lowerLimites
                        ) {
                          setErrMsg({
                            active: true,
                            message:
                              "UpperLimit should be greater then LowerLimit",
                          });
                        } else {
                          setErrMsg({
                            active: false,
                            message: "",
                          });
                        }
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="lowerLimit">Lower Limit</label>
                    <input
                      className="upperlower--input"
                      type="number"
                      id="lowerLimit"
                      name="lowerLimit"
                      style={isAlarmSelected ? { opacity: "0.5" } : {}}
                      disabled={isAlarmSelected}
                      onChange={(e) => {
                        setAlarmProfileInputs({
                          ...alarmProfileInputs,
                          lowerLimites: parseInt(e.target.value),
                        });
                        if (
                          parseInt(e.target.value) >=
                          alarmProfileInputs.upperLimite
                        ) {
                          setErrMsg({
                            active: true,
                            message:
                              "UpperLimit should be greater then LowerLimit",
                          });
                        } else {
                          setErrMsg({
                            active: false,
                            message: "",
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="add-sensor-form" style={input2}>
                <div
                  className="errMsg--alarm"
                  style={{ height: errMsg.active ? "100%" : "0px" }}
                >
                  <div className="msgbackground"></div>
                  <div className="message">
                    <div>{errMsg.message}</div>
                  </div>
                </div>
                <label>Sensor Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setSensorInputs({
                      ...sensorInputs,
                      name: e.target.value,
                      alarmProfileId: isAlarmSelected
                        ? alarmProfile[
                            document.querySelector("select#selectAlarm")
                              .selectedIndex
                          ].id
                        : alarmProfile[alarmProfile.length - 1].id,
                    });
                  }}
                />
                <div>
                  {" "}
                  <label>Inputs</label>
                  <select
                    type="text"
                    onChange={(e) => {
                      setSensorInputs({
                        ...sensorInputs,
                        inputId: e.target.value,
                        alarmProfileId: isAlarmSelected
                          ? alarmProfile[
                              document.querySelector("select#selectAlarm")
                                .selectedIndex
                            ].id
                          : alarmProfile[alarmProfile.length - 1].id,
                      });
                    }}
                  >
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
                  <label>Delay</label>
                  <select
                    type="text"
                    onChange={(e) => {
                      setSensorInputs({
                        ...sensorInputs,
                        delay: parseInt(e.target.value),
                        alarmProfileId: isAlarmSelected
                          ? alarmProfile[
                              document.querySelector("select#selectAlarm")
                                .selectedIndex
                            ].id
                          : alarmProfile[alarmProfile.length - 1].id,
                      });
                    }}
                  >
                    <option></option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="form-button">
            {" "}
            <button
              className="button--next"
              onClick={previnput}
              style={
                addbutton === "Next"
                  ? { opacity: "0.5", pointerEvents: "none" }
                  : {}
              }
            >
              Prev
            </button>
            <button
              className="button--next"
              onClick={
                addbutton === "Done" ? SubmitHandlerAddSensor : nextinput
              }
              style={
                (Object.values(alarmProfileInputs).every(
                  (x) => x !== "" && x !== 0
                ) &&
                  alarmProfileInputs.upperLimite >
                    alarmProfileInputs.lowerLimites &&
                  alarmProfile.findIndex((x) => {
                    return x.name === alarmProfileInputs.name;
                  })) ||
                isAlarmSelected
                  ? addbuttonstyle
                  : { opacity: "0.5", pointerEvents: "none" }
              }
            >
              {addbutton}
            </button>
          </div>
        </div>
      </div>
      <div className="add--button--container">
        <button
          className="add--button"
          onClick={() => {
            Setwindow({ transform: "translateY(0%)" });
          }}
        >
          +
          <div className="arrow">
            <div className="message">Add your sensor</div>
            <div className="point"></div>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default HardwareAction;
