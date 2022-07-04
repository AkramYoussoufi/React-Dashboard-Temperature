import "./App.css";
import { useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import LogPanel from "./logpanel/Logpanel";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import React from "react";
import InfoRetriever from "./hooks/InfoRetriever";

export default function App() {
  window.setInterval(function () {
    InfoRetriever();
  }, 100);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Pages*/}
        <Route path="join" element={<LogPanel />} />
        <Route path="" element={<LogPanel />} />

        {/*Private Pages*/}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}
