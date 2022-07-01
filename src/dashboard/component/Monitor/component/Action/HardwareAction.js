import "./HardwareAction.css";
import { useState } from "react";
import axios from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";

function HardwareAction() {
  //VARIABLES FOR ANIMATIONS
  const [window, Setwindow] = useState({ transform: "translateY(-100%)" });
  const [inputpointer, Setinputpointer] = useState(2);
  const [input1, Setinput1] = useState({});
  const [input2, Setinput2] = useState({});
  const [addbutton, Setaddbutton] = useState("Next");
  const [addbuttonstyle, Setaddbuttonstyle] = useState({});

  const [alarmProfileInputs, setAlarmProfileInputs] = useState({
    name: "",
    upperLimite: 0,
    lowerLimites: 0,
  });
  const [sensorInputs, setSensorInputs] = useState({
    inputId: null,
    name: null,
    delay: null,
    alarmProfileId: null,
  });

  const alarmProfile = [...JSON.parse(sessionStorage.alarmProfile), "test"];

  //VARIABLES FOR AXIOS
  const nextinput = function () {
    switch (inputpointer) {
      case 1:
        {
          //SubmitHandlerAddAlarmProfile();
          Setinput1({ transform: "translateX(0%)" });
          Setinput2({ transform: "translateX(-200%)" });
          Setinputpointer(2);
        }
        break;
      case 2:
        if (
          Object.values(alarmProfileInputs).every(
            (x) => x !== null && x !== "" && x !== 0
          )
        ) {
          SubmitHandlerAddAlarmProfile();
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
    }
  };

  const SubmitHandlerAddAlarmProfile = async () => {
    try {
      const response = await axios.post(
        "api/AlarmProfiles",
        alarmProfileInputs
      );
    } catch (err) {
      console.log(err);
    }
  };

  const SubmitHandlerAddAlarmSensor = async () => {
    try {
      const response = await axios.post("api/Sensors", {
        ...sensorInputs,
        alarmProfileId: "8B04E50E-491B-40C8-FFEC-08DA5B577DBC",
      });
    } catch (err) {
      console.log(err);
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
                  {JSON.parse(sessionStorage.getItem("userInputs"))[0]
                    .isUsed ? (
                    <span className="cercle-red"></span>
                  ) : (
                    <span className="cercle-green"></span>
                  )}
                  {JSON.parse(sessionStorage.getItem("userInputs"))[0].id}
                </li>
                <li className="inputlist">
                  {JSON.parse(sessionStorage.getItem("userInputs"))[1]
                    .isUsed ? (
                    <span className="cercle-red"></span>
                  ) : (
                    <span className="cercle-green"></span>
                  )}
                  {JSON.parse(sessionStorage.getItem("userInputs"))[1].id}
                </li>
                <li className="inputlist">
                  {JSON.parse(sessionStorage.getItem("userInputs"))[2]
                    .isUsed ? (
                    <span className="cercle-red"></span>
                  ) : (
                    <span className="cercle-green"></span>
                  )}
                  {JSON.parse(sessionStorage.getItem("userInputs"))[2].id}
                </li>
                <li className="inputlist">
                  {JSON.parse(sessionStorage.getItem("userInputs"))[3]
                    .isUsed ? (
                    <span className="cercle-red"></span>
                  ) : (
                    <span className="cercle-green"></span>
                  )}
                  {JSON.parse(sessionStorage.getItem("userInputs"))[3].id}
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
                <div className="errMsg--alarm">
                  <div className="msgbackground"></div>
                  <div className="message">
                    <div></div>
                  </div>
                </div>
                <div className="alarm-name-input-box">
                  <label htmlFor="alarmName">Alarm Name</label>
                  <input
                    type="text"
                    id="alarmName"
                    name="alarmName"
                    onChange={(e) => {
                      setAlarmProfileInputs({
                        ...alarmProfileInputs,
                        name: e.target.value,
                      });
                    }}
                  />
                  <div>
                    <span style={{ color: "red" }}>OR</span>
                  </div>
                  <label htmlFor="selectAlarm">Select Alarm</label>
                  <select type="text" id="selectAlarm" name="selectAlarm" />
                </div>
                <div>
                  <div>
                    <label htmlFor="upperLimit">Upper Limit</label>
                    <input
                      className="upperlower--input"
                      type="number"
                      id="upperLimit"
                      name="upperLimit"
                      onChange={(e) => {
                        setAlarmProfileInputs({
                          ...alarmProfileInputs,
                          upperLimite: parseInt(e.target.value),
                        });
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
                      onChange={(e) => {
                        setAlarmProfileInputs({
                          ...alarmProfileInputs,
                          lowerLimites: parseInt(e.target.value),
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="add-sensor-form" style={input2}>
                <div className="errMsg--alarm">
                  <div className="msgbackground"></div>
                  <div className="message">
                    <div></div>
                  </div>
                </div>
                <label>Sensor Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setSensorInputs({
                      ...sensorInputs,
                      name: e.target.value,
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
                      });
                    }}
                  >
                    <option value={""}>-</option>
                    <option
                      value={
                        JSON.parse(sessionStorage.getItem("userInputs"))[0].id
                      }
                      disabled={
                        JSON.parse(sessionStorage.getItem("userInputs"))[0]
                          .isUsed
                      }
                    >
                      {JSON.parse(sessionStorage.getItem("userInputs"))[0].id}
                    </option>
                    <option
                      value={
                        JSON.parse(sessionStorage.getItem("userInputs"))[1].id
                      }
                      disabled={
                        JSON.parse(sessionStorage.getItem("userInputs"))[1]
                          .isUsed
                      }
                    >
                      {JSON.parse(sessionStorage.getItem("userInputs"))[1].id}
                    </option>
                    <option
                      value={
                        JSON.parse(sessionStorage.getItem("userInputs"))[2].id
                      }
                      disabled={
                        JSON.parse(sessionStorage.getItem("userInputs"))[2]
                          .isUsed
                      }
                    >
                      {JSON.parse(sessionStorage.getItem("userInputs"))[2].id}
                    </option>
                    <option
                      value={
                        JSON.parse(sessionStorage.getItem("userInputs"))[3].id
                      }
                      disabled={
                        JSON.parse(sessionStorage.getItem("userInputs"))[3]
                          .isUsed
                      }
                    >
                      {JSON.parse(sessionStorage.getItem("userInputs"))[3].id}
                    </option>
                  </select>
                  <label>Delay</label>
                  <select
                    type="text"
                    onChange={(e) => {
                      setSensorInputs({
                        ...sensorInputs,
                        delay: parseInt(e.target.value),
                      });
                    }}
                  >
                    {" "}
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
            <button className="button--next" onClick={previnput}>
              Prev
            </button>
            <button
              className="button--next"
              onClick={
                addbutton === "Done" ? SubmitHandlerAddAlarmSensor : nextinput
              }
              style={addbuttonstyle}
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
