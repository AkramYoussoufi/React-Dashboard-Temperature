import "./AlarmProfile.css";
import { useState } from "react";
export default function AlarmProfile(props) {
  const alarmProfile = [...JSON.parse(sessionStorage.alarmProfile)];
  const [settingsPanel, setSettingsPanel] = useState(true);

  return (
    <>
      {" "}
      {alarmProfile.map((x) => (
        <li
          className="sensorlist"
          onClick={() => {
            setSettingsPanel(true);
            props.showpanel(settingsPanel);
          }}
        >
          {x.name}
        </li>
      ))}
    </>
  );
}
