import React from "react";
import { useState } from "react";
import search from "./search.png";

export default function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  const [show, Setshow] = useState(false);
  const [searchstyle, Setsearchstyle] = useState({ width: "0%" });
  const showhidesearch = () => {
    if (!show) {
      Setsearchstyle({ width: "100%" });
      Setshow(true);
    } else if (show) {
      Setsearchstyle({ width: "0%" });
      Setshow(false);
      setFilter("");
    }
  };
  return (
    <div>
      <div style={searchstyle}>
        <input
          style={{}}
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
        />{" "}
      </div>{" "}
      <div className="searchbuttoncolumn" onClick={showhidesearch}>
        {" "}
        <img src={search} alt="buttonfilter"></img>
      </div>
    </div>
  );
}
