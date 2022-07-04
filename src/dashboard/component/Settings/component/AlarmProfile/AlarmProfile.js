import "./AlarmProfile.css";
export default function AlarmProfile() {
  const alarmProfile = [...JSON.parse(sessionStorage.alarmProfile)];
  return (
    <>
      {" "}
      {alarmProfile.map((x) => (
        <li className="sensorlist">{x.name}</li>
      ))}
    </>
  );
}
