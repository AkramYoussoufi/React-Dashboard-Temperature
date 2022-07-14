import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  /* { Header: "Id", accessor: "id", Filter: ColumnFilter },*/
  { Header: "Sensor", accessor: "name", Filter: ColumnFilter },
  {
    Header: "Alarm Profile ID" /* accessor: "alarmProfileId"*/,
    Filter: ColumnFilter,
    accessor: "alarmProfileId",
  },
  { Header: "Current Value", Filter: ColumnFilter, accessor: "currentValue" },
  {
    Header: "State",
    Filter: ColumnFilter,
    accessor: "sensorStatus",
  },
];
