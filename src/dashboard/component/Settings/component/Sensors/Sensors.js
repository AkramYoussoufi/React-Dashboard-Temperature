import "./Sensors.css";
import { useState } from "react";
export default function Sensors(props) {
  const sensors = [...JSON.parse(sessionStorage.userSensors)];
  const [settingsPanel, setSettingsPanel] = useState();

  return (
    <>
      {" "}
      {sensors.map((x) => (
        <li
          className="sensorlist"
          onClick={() => {
            setSettingsPanel(false);
            props.showpanel(settingsPanel);
          }}
        >
          {x.name}
        </li>
      ))}
    </>
  );
}
