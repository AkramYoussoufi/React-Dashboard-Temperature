import "./App.css";
import React, { useState } from "react";
import Monitor from "./component/Monitor/Monitor";
import Colibration from "./component/Colibration/Colibration";
import Deviations from "./component/Deviations/Deviations";
import Settings from "./component/Settings/Settings";

function App() {
  const [active, setActive] = useState("Monitor");
  const username = "Don Fleym";
  return (
    <div className="dashboard">
      <div></div>
      {/*THIS MUST KEPT EMPTY TO LET THE DIV RENDER CORRECTLY ITS BEHIND THE NAV BAR*/}
      <div className="navbar--column">
        <div className="navbar--logo">
          <div>
            <img src={require("./closed-eye.png")}></img>
          </div>
        </div>
        <div className="navbar--list">
          <button onClick={() => setActive("Monitor")}>Monitor</button>
          <button onClick={() => setActive("Colibration")}>Colibration</button>
          <button onClick={() => setActive("Deviations")}>Deviations</button>
          <button onClick={() => setActive("Settings")}>Settings</button>
        </div>
        <div className="username--title">
          <div className="username--login--panel">
            <div className="login--cercle"></div>
            <div className="login--username">
              {username}
              <div className="login--arrow">
                <div className="user--panel">
                  <div>
                    <button>Account Management</button>
                  </div>
                  <div>
                    <button className="Logoutbutton">Logout</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="login--logo">
              <img src={require("./user--profile--logo.png")}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard--content">
        {/* they gonna work as long as u make specified divs and not general ones because it control them all*/}
        <div>{active === "Monitor" && <Monitor />}</div>
        <div>{active === "Colibration" && <Colibration />}</div>
        <div>{active === "Deviations" && <Deviations />}</div>
        <div>{active === "Settings" && <Settings />}</div>
      </div>
    </div>
  );
}

export default App;
