import axios from "../api/axios";

export default async function InfoRetriever() {
  const response = await axios.get("api/Inpute/GetAllInputs");
  const response1 = await axios.get("api/AlarmProfiles");
  const response2 = await axios.get("/api/Sensors");
  const inputs = response.data.result;
  const alarmProfile = response1.data.result;
  const sensors = response2.data.result;
  sessionStorage.setItem("alarmProfile", JSON.stringify(alarmProfile));
  sessionStorage.setItem("userInputs", JSON.stringify(inputs));
  sessionStorage.setItem("userSensors", JSON.stringify(sensors));
}
