import "./Hardwaretable.css";
import { useState } from "react";

import Table from "./component/Table/Table";

function Hardwaretable() {
  const [row, Setrow] = useState([
    {
      id: 1,
      sensor: "ROOM " + 1,
      alarm_profile: Math.floor(Math.random() * 30 + 1) > 15 ? "ON" : "OFF",
      value: 10,
      state: Math.floor(Math.random() * 30 + 1) > 15 ? "BAD" : "GOOD",
    },
    {
      id: 2,
      sensor: "ROOM " + 2,
      alarm_profile: Math.floor(Math.random() * 30 + 1) > 15 ? "ON" : "OFF",
      value: 30,
      state: Math.floor(Math.random() * 30 + 1) > 15 ? "BAD" : "GOOD",
    },
  ]);

  const test = function () {
    Setrow((PrevState) => [
      ...PrevState,
      {
        id: row[row.length - 1].id + 1,
        sensor: "ROOM " + Number(row[row.length - 1].id + 1),
        alarm_profile: Math.floor(Math.random() * 30 + 1) > 15 ? "ON" : "OFF",
        value: Math.floor(Math.random() * 30 + 1),
        state: Math.floor(Math.random() * 30 + 1) > 15 ? "BAD" : "GOOD",
      },
    ]);
  };

  return (
    <div className="table--container">
      {/* {/* <button
        style={{
          position: "absolute",
          bottom: "50%",
          zIndex: "3",
          width: "10em",
          height: "3em",
          background: "red",
        }}
        onClick={test}
      > 
        test
      </button> */}
      <div className="confirm--message">
        <div className="message--overlay" /*onClick={/*confirmdelete}*/></div>
        <div className="message--box">
          <button className="close--message" /*onClick={confirmdelete}*/>
            X
          </button>
          <div className="message--title">ARE YOU SURE ?</div>
          <div className="message--button--container">
            <button className="yes--button" /*onClick={deleteselecteditems}*/>
              YES
            </button>
            <button className="non--button" /*onClick={confirmdelete}*/>
              CLOSE
            </button>
          </div>
        </div>
      </div>
      <div className="table">
        <Table sentdata={row} />
        <button className="button--group" /*onClick={confirmdelete}*/>
          <div className="button--group--arrow"></div> Delete
        </button>
      </div>
    </div>
  );
}

export default Hardwaretable;
