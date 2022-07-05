import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  { Header: "Select" },
  /* { Header: "Id", accessor: "id", Filter: ColumnFilter },*/
  { Header: "Sensor", accessor: "name", Filter: ColumnFilter },
  {
    Header: "Alarm Profile" /* accessor: "alarmProfileId"*/,
    Filter: ColumnFilter,
  },
  { Header: "Value", Filter: ColumnFilter },
  { Header: "State", Filter: ColumnFilter },
  { Header: "Edit" },
];
