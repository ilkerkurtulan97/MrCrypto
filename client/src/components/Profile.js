import {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navigation from './Navigation'
import Register from "./Register";
import ErrorPage from "./ErrorPage";


function Profile(props) {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');

    useEffect(() => {
        axios.get("http://localhost:5000/")
        .then(res => {
          setUserName(res.data.name);
          setUserSurname(res.data.surname);
          console.log(res.data.name);
          console.log(res.data.surname);
        }).catch(err => {
          console.log("Could not get profile data !");
        })
      })


    return (
        <div>
            <h1>Profile Component</h1>
        </div>
    )
}

export default Profile
