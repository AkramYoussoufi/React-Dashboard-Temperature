import "./Sensors.css";
export default function Sensors() {
  const sensors = [...JSON.parse(sessionStorage.userSensors)];
  return (
    <>
      {" "}
      {sensors.map((x) => (
        <li className="sensorlist">{x.name}</li>
      ))}
    </>
  );
}
