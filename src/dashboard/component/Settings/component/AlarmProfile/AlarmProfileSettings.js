import "./AlarmProfileSettings.css";
import { useState } from "react";
import axios from "../../../../../api/axios";
import arrowdown from "./white-down-arrow-png-2.png";
import InfoRetriever from "../../../../../hooks/InfoRetriever";

export default function AlarmProfileSettings(props) {
  const [DropDownDelete, setDropDownDelete] = useState({ height: "0px" });
  const alarmProfile = [...JSON.parse(sessionStorage.alarmProfile)];
  const [errMsg, seterrMsg] = useState({ active: false, message: "" });

  const [alarmProfileUpdate, setAlarmProfileUpdate] = useState({
    name: "",
    upperLimite: 0,
    lowerLimites: 0,
  });

  console.log(alarmProfileUpdate);

  return (
    <div className="boxpanel--sensor">
      <div className="boxpanel--container">
        <div className="delete--container">
          <div
            className="delete--dropdown"
            onClick={() => {
              if (DropDownDelete.height === "0px") {
                setDropDownDelete({ height: "100%" });
              } else {
                setDropDownDelete({ height: "0px" });
              }
            }}
          >
            <div className="text">Delete AlarmProfile</div>
            <div className="arrowdown">
              <div>
                <img src={arrowdown}></img>
              </div>
            </div>
          </div>
          <div className="thedropdown" style={DropDownDelete}>
            <div className="text">
              ARE YOU SURE YOU WANNA DELETE THIS ALARM ?
            </div>
            <div className="button--disable--enable">
              <button
                onClick={async () => {
                  axios
                    .delete(
                      "/api/AlarmProfiles/" + alarmProfile[props.indexof].id
                    )
                    .then(function (response) {
                      console.log(response);
                      InfoRetriever();
                      seterrMsg({ active: false, message: "" });
                      setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                    })
                    .catch(function (error) {
                      console.log(error);
                      seterrMsg({
                        active: true,
                        message: error.response.data.Errors[0].Message,
                      });
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
                Here you can update your Alarm Profile please make sure your
                upperlimit is greater then the lowerlimit and also do not use an
                existing Alarm Profile name.
              </h5>
              <span style={{ color: "red" }}>
                <b>YOU CANNOT DELETE USED ALARM PROFILE</b>
              </span>
            </div>
            <div className="form--update--sensor" id="alarm">
              <form>
                <div
                  className="errMsg"
                  style={{ display: errMsg.active ? "block" : "none" }}
                >
                  {errMsg.message}
                </div>
                <div className="form--labelinput--container">
                  <label>Alarm Profile Name</label>
                  <input
                    onChange={(e) => {
                      setAlarmProfileUpdate({
                        ...alarmProfileUpdate,
                        name: e.currentTarget.value,
                      });
                    }}
                  />{" "}
                </div>
                <div className="form--labelinput--container">
                  <label>UpperLimit</label>
                  <input
                    id="UpperLimit"
                    onChange={(e) => {
                      setAlarmProfileUpdate({
                        ...alarmProfileUpdate,
                        upperLimite: parseInt(e.currentTarget.value),
                      });
                    }}
                  />
                  <label>LowerLimit</label>
                  <input
                    id="LowerLimit"
                    onChange={(e) => {
                      setAlarmProfileUpdate({
                        ...alarmProfileUpdate,
                        LowerLimit: parseInt(e.currentTarget.value),
                      });
                    }}
                  />
                </div>{" "}
                <div className="button--update--sensor" id="alarm">
                  <button
                    disabled={
                      Object.values(alarmProfileUpdate).every((x) => x == "") &&
                      alarmProfileUpdate.LowerLimit >
                        alarmProfileUpdate.upperLimite
                    }
                    style={
                      Object.values(alarmProfileUpdate).every(
                        (x) => x !== ""
                      ) &&
                      alarmProfileUpdate.LowerLimit <
                        alarmProfileUpdate.upperLimite
                        ? {}
                        : { opacity: "0.5", pointerEvents: "none" }
                    }
                    onClick={async () => {
                      axios
                        .put(
                          "/api/AlarmProfiles/" +
                            alarmProfile[props.indexof].id,
                          {
                            name: alarmProfileUpdate.name,
                            upperLimite: alarmProfileUpdate.upperLimite,
                            lowerLimites: alarmProfileUpdate.lowerLimites,
                          }
                        )
                        .then(function (response) {
                          seterrMsg({ active: false, message: "" });
                          InfoRetriever();
                        })
                        .catch(function (error) {
                          seterrMsg({
                            active: true,
                            message: error.response.data.Errors[0].Message,
                          });
                        });
                    }}
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
