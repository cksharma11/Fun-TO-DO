import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Options from "../Options/Options";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Options} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
    </Router>
  );
};

export default App;
