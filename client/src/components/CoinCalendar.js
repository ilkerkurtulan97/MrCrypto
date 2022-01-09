import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CoinCalendar() {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navigation username={userName} surname={userSurname} />
      <div className="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      
    </div>
  );
}

export default CoinCalendar;
