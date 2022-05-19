import "./TableRow.css";
import editimg from "./edit-icon.png";
import correctimg from "./509013.webp";
import React, { useState } from "react";

function TableRow(props) {
  // const AlarmProfile = "";
  // const Value = "";
  // const State = "";
  // const [Sensor, setSensor] = useState("");

  // const editbutton = function (event) {
  //   setSensor("");
  //   const editimage = document.querySelector(".Modify .edit");
  //   const correctimage = document.querySelector(".Modify .correct");
  //   const sensorInput = document.querySelector(".editsensor");
  //   const newSensor = document.querySelector(".editsensor").value;

  //   sensorInput.style.display = "inline";
  //   correctimage.style.display = "inline";
  //   editimage.style.display = "none";
  //   if (event.key === "Enter" && sensorInput.value !== "") {
  //     setSensor(newSensor);
  //     sensorInput.style.display = "none";
  //     correctimage.style.display = "none";
  //     editimage.style.display = "block";
  //   }
  // };

  // const showdelbutt =
  //   function () /* THIS FUNCTION SHOW AND ACTIVATE DELETE BUTTON */ {
  //     const checkedbox = document.querySelectorAll(".checkbox:checked");
  //     const delbutt = document.querySelector(".button--group");
  //     const checkbox = document.querySelectorAll(".checkbox");
  //     for (let i = 0; i <= checkbox.length; i++) {
  //       if (checkedbox.length >= 1) {
  //         delbutt.style.opacity = "1";
  //         delbutt.style.cursor = "pointer";
  //       } else if (checkedbox.length === 0) {
  //         delbutt.style.opacity = "0.1";
  //         delbutt.style.cursor = "not-allowed";
  //       }
  //     }
  //   };

  return (
    <tr>
      <td>
        <input /*onClick={showdelbutt}*/ className="checkbox" type="checkbox" />
      </td>
      <td>
        {props.Sensor}
        <input className="editsensor" /*onKeyPress={editbutton}*/></input>
      </td>
      <td>{props.AlarmProfile}</td>
      <td>{props.Value}</td>
      <td>{props.State}</td>
      <td>
        <div className="Modify">
          <div>
            <img
              className="edit"
              src={editimg}
              alt="Edit your hardware"
              /*onClick={editbutton}*/
            ></img>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
