import React from "react";

export default function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span style={{ position: "absolute", right: "0px", bottom: "0px" }}>
      search:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}
