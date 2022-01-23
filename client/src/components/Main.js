import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import Profile from "./Profile";
import Messages from "./Messages";
import { Profiler } from "react";

function Main() {
  return (
    <Router>
        <Route path="/" component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Messages} />
    </Router>
  );
}

export default Main;
