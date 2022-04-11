import "./Hardwaretable.css";

function Hardwaretable() {
  //THOSE ARE TABLE VARIABLES.
  const Sensor = "";
  const AlarmProfile = "";
  const Value = "";
  const State = "";

  //THIS FUNCTION FOR DELETE BUTTON

  // const checkedbox = document.querySelector(".checkbox:checked").parentElement.parentElement;
  // const checkbox = document.querySelectorAll(".checkbox");
  // const delbutt = document.querySelector(".button--group");
  //MAKE THE DEL BUTTON WORK
  const showdelbutt = function () {
    const checkedbox = document.querySelectorAll(".checkbox:checked");
    const delbutt = document.querySelector(".button--group");
    const checkbox = document.querySelectorAll(".checkbox");

    for (let i = 0; i <= checkbox.length; i++) {
      if (checkedbox.length >= 1) {
        delbutt.style.opacity = "1";
        delbutt.style.cursor = "pointer";
      } else if (checkedbox.length === 0) {
        delbutt.style.opacity = "0.1";
        delbutt.style.cursor = "not-allowed";
      }
    }
  };

  const showconfirmdel = function () {
    const checkedbox = document.querySelectorAll(".checkbox:checked");
    const delbutt = document.querySelector(".button--group");
    for (let i = 0; i <= checkedbox.length; i++) {
      checkedbox[i].parentElement.parentElement.remove();
      delbutt.style.opacity = "0.1";
      delbutt.style.cursor = "not-allowed";
    }
  };

  return (
    <div className="table--container">
      <div className="confirm--message">
        <div className="message--overlay"></div>
        <div className="message--box">
          <div>s</div>
          <div>s</div>
          <div>s</div>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="Sensor" style={{ width: "5%" }}>
                Select
              </th>
              <th className="Alarm Profile" style={{ width: "45%" }}>
                Sensor
              </th>
              <th className="Value" style={{ width: "20%" }}>
                Alarm Profile
              </th>
              <th className="State" style={{ width: "10%" }}>
                Value
              </th>
              <th className="Sensor" style={{ width: "10%" }}>
                State
              </th>
              <th className="Modification" style={{ width: "5%" }}>
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  onClick={showdelbutt}
                  className="checkbox"
                  type="checkbox"
                  id="hardware"
                  name="hardware"
                  value="hardware"
                />
              </td>
              <td>1</td>
              <td>{AlarmProfile}</td>
              <td>{Value}</td>
              <td>{State}</td>
              <td>
                <div className="Modify">
                  <div></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  onClick={showdelbutt}
                  className="checkbox"
                  type="checkbox"
                  id="hardware"
                  name="hardware"
                  value="hardware"
                />
              </td>
              <td>2</td>
              <td>{AlarmProfile}</td>
              <td>{Value}</td>
              <td>{State}</td>
              <td>
                <div className="Modify">
                  <div></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  onClick={showdelbutt}
                  className="checkbox"
                  type="checkbox"
                  id="hardware"
                  name="hardware"
                  value="hardware"
                />
              </td>
              <td>3</td>
              <td>{AlarmProfile}</td>
              <td>{Value}</td>
              <td>{State}</td>
              <td>
                <div className="Modify">
                  <div></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  onClick={showdelbutt}
                  className="checkbox"
                  type="checkbox"
                  id="hardware"
                  name="hardware"
                  value="hardware"
                />
              </td>
              <td>4</td>
              <td>{AlarmProfile}</td>
              <td>{Value}</td>
              <td>{State}</td>
              <td>
                <div className="Modify">
                  <div></div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot />
        </table>
        <button className="button--group" onClick={showconfirmdel}>
          <div className="button--group--arrow"></div> Delete
        </button>
      </div>
    </div>
  );
}

export default Hardwaretable;
