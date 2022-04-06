import "./Hardwaretable.css";

function Hardwaretable() {
  const Sensor = "";
  const AlarmProfile = "";
  const Value = "";
  const State = "";
  return (
    <div className="table--container">
      <div className="table">
        <table>
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
          <tr>
            <td>
              <input
                type="checkbox"
                id="hardware"
                name="hardware"
                value="hardware"
              />
            </td>
            <td>{Sensor}</td>
            <td>{AlarmProfile}</td>
            <td>{Value}</td>
            <td>{State}</td>
            <td>
              <div className="Modify">
                <div></div>
              </div>
            </td>
          </tr>
        </table>
        <button className="button--group">
          <div className="button--group--arrow"></div> Delete
        </button>
      </div>
    </div>
  );
}

export default Hardwaretable;
