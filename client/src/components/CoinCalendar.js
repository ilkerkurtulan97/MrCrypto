import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styling/CoinCalendar.css';

function CoinCalendar() {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  const [value, onChange] = useState(new Date());
  const [alarms, setAlarms] = useState("x");

  const addAlarm = alarm => {
    const newAlarms = [alarm, ...alarms];

    setAlarms(newAlarms);
  }

  const removeAlarm = id => {
    const removedArr = [...alarms].filter(alarm => alarm.id !== id);

    setAlarms(removedArr);
  }

  const dateChange = (e) => {
    onChange(e);
  }

  const handleAlarmButton = () => {
    setAlarms(value);
    console.log(value);
    addAlarm(value);
  }

  return (
    <div>
      <Navigation username={userName} surname={userSurname} />

      <div className="calendar-div">
        <Calendar onChange={dateChange} value={value} className="calendar"/>
      </div>

      <button onClick={handleAlarmButton} className="alarmbutton">Set</button>

      <div className="alarmlist-div">
        <h2>Current Alarms</h2>
      </div>
      
    </div>
  );
}

export default CoinCalendar;
