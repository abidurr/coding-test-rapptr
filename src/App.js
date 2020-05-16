import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn"

export default function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>  
      </div>
  </Router>
    </div>
  );
}
