import "./HardwareAction.css";

function HardwareAction() {
  // const overlayAdd = document.querySelector(".overlay--add--container");
  // const submitAdd = document.querySelector("form div .form--add--submit");
  // const closeAdd = document.querySelector(".window--add--box button");

  const clshowbox = function () {
    const windowAllbox = document.querySelector(".window--add--container");
    if (
      windowAllbox.style.display === "none" ||
      windowAllbox.style.display === ""
    ) {
      windowAllbox.style.display = "flex";
    } else if (windowAllbox.style.display === "flex") {
      windowAllbox.style.display = "none";
    }
  };

  return (
    <div className="action--container">
      <div className="overlay--add--container"></div>
      <div className="window--add--container">
        <div className="overlay--add--container" onClick={clshowbox}></div>
        <div className="window--add--box">
          <button onClick={clshowbox}>x</button>
          <div>
            <h2>ADD YOUR HARDWARE</h2>
          </div>
          <div className="form--add--box">
            <form /*onSubmit={submitHandler}*/>
              <div>
                <span>Title</span>
                <input />
              </div>
              <div>
                <span>Title</span>
                <input />
              </div>
              <div>
                <span>Title</span>
                <input />
              </div>
              <div>
                <span>Title</span>
                <input />
              </div>
              <div>
                <input
                  type="submit"
                  className="form--add--submit"
                  value="VALID"
                  onClick={clshowbox}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="add--button--container">
        <button className="add--button" onClick={clshowbox}>
          +
          <div className="arrow">
            <div className="message">Add your hardware</div>
            <div className="point"></div>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default HardwareAction;
