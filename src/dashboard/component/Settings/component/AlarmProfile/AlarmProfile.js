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
          key={alarmProfile.id}
          className="sensorlist"
          onClick={() => {
            setSettingsPanel(true);
            const indexof = alarmProfile.findIndex((object) => {
              return object.name === x.name;
            });
            props.showpanel(settingsPanel, indexof);
          }}
        >
          {x.name}
        </li>
      ))}
    </>
  );
}
