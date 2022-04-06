import "./HardwareAction.css";

function HardwareAction() {
  return (
    <div className="action--container">
      <div className="add--button--container">
        <button className="add--button">
          +
          <div className="arrow">
            <div class="message">Add your hardware</div>
            <div class="point"></div>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default HardwareAction;
