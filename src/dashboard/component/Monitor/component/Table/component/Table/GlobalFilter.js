import React from "react";
import search from "./search.png";
import { useState } from "react";

export default function GlobalFilter({ filter, setFilter }) {
  const [show, Setshow] = useState(false);
  const [searchstyle, Setsearchstyle] = useState({ width: "0%" });
  const [visible, Setvisible] = useState({ display: "none" });
  const showhidesearch = () => {
    if (!show) {
      Setsearchstyle({ width: "100%", transition: "all 0.3s" });
      Setvisible({ display: "inline" });
      Setshow(true);
    } else if (show) {
      Setvisible({ display: "none" });
      Setsearchstyle({ width: "0%", transition: "all 0s" });
      Setshow(false);
      setFilter("");
    }
  };
  return (
    <div className="globalsearchbar">
      <div onClick={showhidesearch}>
        <img src={search} alt="global search" />
      </div>
      <div style={searchstyle}>
        <input
          style={visible}
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
}
