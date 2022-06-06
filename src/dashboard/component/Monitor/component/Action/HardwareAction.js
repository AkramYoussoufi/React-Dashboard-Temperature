import "./HardwareAction.css";
import { useState } from "react";
import closered from "./closered.png";
import upbutt from "./up.png";

function HardwareAction() {
  const [window, Setwindow] = useState({ transform: "translateY(-100%)" });
  const [inputpointer, Setinputpointer] = useState(2);
  const [input1, Setinput1] = useState({});
  const [input2, Setinput2] = useState({});
  const [input3, Setinput3] = useState({});
  const [input4, Setinput4] = useState({});
  const [addbutton, Setaddbutton] = useState("Next");
  const [addbuttonstyle, Setaddbuttonstyle] = useState({});

  const nextinput = function () {
    switch (inputpointer) {
      default:
        Setinput1({ transform: "translateX(0%)" });
        Setinput2({ transform: "translateX(-200%)" });
        Setinput3({ transform: "translateX(-200%)" });
        Setinput4({ transform: "translateX(-200%)" });
        Setinputpointer(2);
        break;
      case 2:
        Setinput1({ transform: "translateX(2000%)" });
        Setinput2({ transform: "translateX(0%)" });
        Setinput3({ transform: "translateX(-200%)" });
        Setinput4({ transform: "translateX(-200%)" });
        Setinputpointer(3);
        break;
      case 3:
        Setinput1({ transform: "translateX(200%)" });
        Setinput2({ transform: "translateX(200%)" });
        Setinput3({ transform: "translateX(0%)" });
        Setinput4({ transform: "translateX(-200%)" });
        Setinputpointer(4);
        break;
      case 4:
        Setinput1({ transform: "translateX(200%)" });
        Setinput2({ transform: "translateX(200%)" });
        Setinput3({ transform: "translateX(200%)" });
        Setinput4({ transform: "translateX(0%)" });
        Setaddbutton("Done");
        Setaddbuttonstyle({
          background: "#7DC72D",
          color: "white",
          border: "none",
        });

        break;
    }
  };

  return (
    <div className="action--container">
      <div className="overlay--add--container"></div>
      <div className="window--add--container" style={window}>
        <div className="window--add--box">
          <button
            className="closewindow"
            onClick={() => {
              Setwindow({ transform: "translateY(-100%)" });
            }}
          >
            <img src={upbutt}></img>
          </button>
          <h1>ADD YOUR SENSOR</h1>
          <div>
            {" "}
            <form>
              <div style={input1}>
                <label>Input</label>
                <input type="text" />
              </div>{" "}
              <div style={input2}>
                <label>Input 2</label>
                <input type="text" />
              </div>
              <div style={input3}>
                <label>Input 3</label>
                <input type="text" />
              </div>
              <div style={input4}>
                <label>Input 4</label>
                <input type="text" />
              </div>
            </form>
          </div>
          <button onClick={nextinput} style={addbuttonstyle}>
            {addbutton}
          </button>
        </div>
      </div>
      <div className="add--button--container">
        <button
          className="add--button"
          onClick={() => {
            Setwindow({ transform: "translateY(0%)" });
          }}
        >
          +
          <div className="arrow">
            <div className="message">Add your sensor</div>
            <div className="point"></div>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default HardwareAction;
