import "./Hardwaretable.css";
import { useState } from "react";

import Table from "./component/Table/Table";

function Hardwaretable() {
  const sensor = [...JSON.parse(sessionStorage.userSensors)];
  console.log(sensor);
  /*const sensorlist = */

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
        <Table sentdata={sensor} />
        <button className="button--group" /*onClick={confirmdelete}*/>
          <div className="button--group--arrow"></div> Delete
        </button>
      </div>
    </div>
  );
}

export default Hardwaretable;
