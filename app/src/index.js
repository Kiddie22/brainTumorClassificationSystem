import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "./styles/style.css";
import "./styles/style.css";
import "./components/fire";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Model from "./components/Model";
import Team from "./components/Team";

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/analyze">
        <Model />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);
