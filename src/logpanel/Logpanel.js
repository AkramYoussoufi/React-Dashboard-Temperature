import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./Logpanel.css";

function Logpanel() {
  return (
    <div className="container">
      <div className="auth">
        <div className="XCONTAINER">
          <Login></Login>
          <Register></Register>
        </div>
      </div>
      <div className="footer">
        <div>TempMonitor</div>
        <div>2022 © DataCollector App</div>
        <div>FST STATE FE-PROJECT</div>
      </div>
    </div>
  );
}

export default Logpanel;
