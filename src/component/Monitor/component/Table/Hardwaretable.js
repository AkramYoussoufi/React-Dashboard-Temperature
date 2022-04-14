import "./Hardwaretable.css";
import editimg from "./edit-icon.png";
import correctimg from "./509013.webp";
import React, { useState } from "react";

function Hardwaretable() {
  //THOSE ARE TABLE VARIABLES.
  const AlarmProfile = "";
  const Value = "";
  const State = "";

  const [Sensor, setSensor] = useState("");

  const editbutton = function (event) {
    setSensor("");
    const editimage = document.querySelector(".Modify .edit");
    const correctimage = document.querySelector(".Modify .correct");
    const sensorInput = document.querySelector(".editsensor");
    const newSensor = document.querySelector(".editsensor").value;
    sensorInput.style.display = "inline";
    correctimage.style.display = "inline";
    editimage.style.display = "none";
    if (event.key === "Enter") {
      setSensor(newSensor);
      sensorInput.style.display = "none";
      correctimage.style.display = "none";
      editimage.style.display = "block";
    }
  };

  const showdelbutt =
    function () /* THIS FUNCTION SHOW AND ACTIVATE DELETE BUTTON */ {
      const checkedbox = document.querySelectorAll(".checkbox:checked");
      const delbutt = document.querySelector(".button--group");
      const checkbox = document.querySelectorAll(".checkbox");
      for (let i = 0; i <= checkbox.length; i++) {
        if (checkedbox.length >= 1) {
          delbutt.style.opacity = "1";
          delbutt.style.cursor = "pointer";
        } else if (checkedbox.length === 0) {
          delbutt.style.opacity = "0.1";
          delbutt.style.cursor = "not-allowed";
        }
      }
    };

  const confirmdelete = function () /* SHOW CONFIRM BOX FOR DELETE ITEMS */ {
    const messagebox = document.querySelector(".confirm--message");
    const delbutt = document.querySelector(".button--group");

    if (delbutt.style.cursor === "pointer") {
      if (messagebox.style.display === "flex") {
        messagebox.style.display = "none";
      } else {
        messagebox.style.display = "flex";
      }
    }
  };

  const deleteselecteditems =
    function () /* DELETE SELECTED ITEMS THAT EXISTED IN CHECKED ARRAY CHECKBOX */ {
      const checkedbox = document.querySelectorAll(".checkbox:checked");
      const delbutt = document.querySelector(".button--group");
      const messagebox = document.querySelector(".confirm--message");
      messagebox.style.display = "none";
      for (let i = 0; i <= checkedbox.length; i++) {
        checkedbox[i].parentElement.parentElement.remove();
        delbutt.style.opacity = "0.1";
        delbutt.style.cursor = "not-allowed";
      }
    };

  return (
    <div className="table--container">
      <div className="confirm--message">
        <div className="message--overlay" onClick={confirmdelete}></div>
        <div className="message--box">
          <button className="close--message" onClick={confirmdelete}>
            X
          </button>
          <div className="message--title">ARE YOU SURE ?</div>
          <div className="message--button--container">
            <button className="yes--button" onClick={deleteselecteditems}>
              YES
            </button>
            <button className="non--button" onClick={confirmdelete}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="Sensor" style={{ width: "5%" }}>
                Select
              </th>
              <th className="Alarm Profile" style={{ width: "45%" }}>
                Sensor
              </th>
              <th className="Value" style={{ width: "20%" }}>
                Alarm Profile
              </th>
              <th className="State" style={{ width: "10%" }}>
                Value
              </th>
              <th className="Sensor" style={{ width: "10%" }}>
                State
              </th>
              <th className="Modification" style={{ width: "5%" }}>
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  onClick={showdelbutt}
                  className="checkbox"
                  type="checkbox"
                />
              </td>
              <td>
                {Sensor}
                <input className="editsensor" onKeyPress={editbutton}></input>
              </td>
              <td>{AlarmProfile}</td>
              <td>{Value}</td>
              <td>{State}</td>
              <td>
                <div className="Modify">
                  <div>
                    <img
                      className="edit"
                      src={editimg}
                      alt="Edit your hardware"
                      onClick={editbutton}
                    ></img>
                    <img
                      className="correct"
                      src={correctimg}
                      alt="Edit your hardware"
                      onClick={editbutton}
                    ></img>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot />
        </table>
        <button className="button--group" onClick={confirmdelete}>
          <div className="button--group--arrow"></div> Delete
        </button>
      </div>
    </div>
  );
}

export default Hardwaretable;
