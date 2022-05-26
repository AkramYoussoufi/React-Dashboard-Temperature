import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  { Header: "Select" },
  { Header: "Id", accessor: "id", Filter: ColumnFilter },
  { Header: "Sensor", accessor: "sensor", Filter: ColumnFilter },
  { Header: "Alarm Profile", accessor: "alarm_profile", Filter: ColumnFilter },
  { Header: "Value", accessor: "value", Filter: ColumnFilter },
  { Header: "State", accessor: "state", Filter: ColumnFilter },
  { Header: "Edit" },
];
