import "./Hardwaretable.css";

import TableRow from "./component/TableRow/TableRow";

function Hardwaretable() {
  //THOSE ARE TABLE VARIABLES.

  const confirmdelete = function () /* SHOW CONFIRM BOX FOR DELETE ITEMS */ {
    const messagebox = document.querySelector(".confirm--message");
    const delbutt = document.querySelector(".button--group");

    if (delbutt.style.cursor === "pointer") {
      if (messagebox.style.display === "flex") {
        messagebox.style.display = "none";
      } else {
        messagebox.style.display = "flex";
      }
    }
  };

  const deleteselecteditems =
    function () /* DELETE SELECTED ITEMS THAT EXISTED IN CHECKED ARRAY CHECKBOX */ {
      const checkedbox = document.querySelectorAll(".checkbox:checked");
      const delbutt = document.querySelector(".button--group");
      const messagebox = document.querySelector(".confirm--message");
      messagebox.style.display = "none";
      for (let i = 0; i <= checkedbox.length; i++) {
        checkedbox[i].parentElement.parentElement.remove();
        delbutt.style.opacity = "0.1";
        delbutt.style.cursor = "not-allowed";
      }
    };

  return (
    <div className="table--container">
      <div className="confirm--message">
        <div className="message--overlay" onClick={confirmdelete}></div>
        <div className="message--box">
          <button className="close--message" onClick={confirmdelete}>
            X
          </button>
          <div className="message--title">ARE YOU SURE ?</div>
          <div className="message--button--container">
            <button className="yes--button" onClick={deleteselecteditems}>
              YES
            </button>
            <button className="non--button" onClick={confirmdelete}>
              CLOSE
            </button>
          </div>
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
            <TableRow />
            <TableRow />
          </tbody>
          <tfoot />
        </table>
        <button className="button--group" onClick={confirmdelete}>
          <div className="button--group--arrow"></div> Delete
        </button>
      </div>
    </div>
  );
}

export default Hardwaretable;
