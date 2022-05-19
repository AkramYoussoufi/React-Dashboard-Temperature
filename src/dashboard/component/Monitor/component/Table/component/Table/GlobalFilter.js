import React from "react";

export default function GlobalFilter({ filter, setFilter }) {
  return (
    <span style={{ position: "absolute", right: "0px", bottom: "0px" }}>
      search:{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
}
