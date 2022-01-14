import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import CoinCalendar from './components/CoinCalendar';
import Messages from './components/Messages';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":profile" element={<Profile />}>
          <Route path=":teamId" element={<Login />} />
          <Route path="new" element={<CoinCalendar />} />
          <Route index element={<Messages />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
