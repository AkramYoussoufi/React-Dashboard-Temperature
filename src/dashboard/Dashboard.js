import React, { useState, useEffect, useContext } from "react";
import "./Dashboard.css";
import useAuth from "../hooks/useAuth";
import Monitor from "./component/Monitor/Monitor";
import Deviations from "./component/Deviations/Deviations";
import Settings from "./component/Settings/Settings";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function Dashboard() {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    document.title = "Dashboard";
  });
  const navigate = useNavigate();
  const accesToken = true;

  const [active, setActive] = useState("Monitor");
  const username = auth.user;

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
                    <button
                      className="Logoutbutton"
                      onClick={() => {
                        sessionStorage.clear();
                        navigate("/join");
                      }}
                    >
                      Logout
                    </button>
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
        <div>
          {active === "Monitor" && <Monitor />}
          {active === "Deviations" && <Deviations />}
          {active === "Settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
