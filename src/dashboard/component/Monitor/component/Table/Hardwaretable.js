import "./Hardwaretable.css";
import { useState, useEffect } from "react";
import InfoRetriever from "../../../../../hooks/InfoRetriever";

import Table from "./component/Table/Table";

function Hardwaretable(props) {
  /* setInterval(() => {
    InfoRetriever();
    console.log(
      [...JSON.parse(sessionStorage.userSensors)].map((x) => {
        return x.currentValue;
      })
    );
  }, 40000);*/
  const index = (index) => {
    props.getindex(index);
  };

  return (
    <div className="table--container">
      <div className="table">
        <Table
          sentdata={[...JSON.parse(sessionStorage.userSensors)]}
          getindex={index}
        />
      </div>
    </div>
  );
}

export default Hardwaretable;
