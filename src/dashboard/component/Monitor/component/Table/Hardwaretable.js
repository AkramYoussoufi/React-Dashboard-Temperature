import "./Hardwaretable.css";
import { useState, useEffect } from "react";
import InfoRetriever from "../../../../../hooks/InfoRetriever";

import Table from "./component/Table/Table";

function Hardwaretable() {
  setInterval(() => {
    InfoRetriever();
    console.log(
      [...JSON.parse(sessionStorage.userSensors)].map((x) => {
        return x.currentValue;
      })
    );
  }, 40000);

  return (
    <div className="table--container">
      <div className="table">
        <Table sentdata={[...JSON.parse(sessionStorage.userSensors)]} />
      </div>
    </div>
  );
}

export default Hardwaretable;
