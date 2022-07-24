import "./Sensors.css";
import { useState } from "react";
export default function Sensors(props) {
  const sensors = [...JSON.parse(sessionStorage.userSensors)];
  const [settingsPanel, setSettingsPanel] = useState();
  const [active, setActive] = useState(false);
  const [styleactive, setstyleactive] = useState();

  return (
    <>
      {" "}
      {sensors.map((x) => (
        <li
          key={sensors.id}
          style={{}}
          className="sensorlist"
          onClick={() => {
            setActive(active ? true : false);
            setSettingsPanel(false);
            const indexof = sensors.findIndex((object) => {
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
