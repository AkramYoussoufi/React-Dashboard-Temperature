import "./App.css";
import { useState } from "react";
import Dashboard from "./dashboard/Dashboard";
import LogPanel from "./logpanel/Logpanel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function App() {
  const temporary = { position: "absolute", zIndex: "5" };
  return (
    <Router>
      <div style={temporary}>
        <Link to={"./Join"}>
          <button>LOGPANEL</button>
        </Link>
        <Link to={"./Dashboard"}>
          <button>DASHBOARD</button>
        </Link>
      </div>
      <Routes>
        <Route path="/Join" element={<LogPanel />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
