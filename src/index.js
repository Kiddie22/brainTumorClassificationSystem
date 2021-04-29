import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "./styles/style.css";
import "./styles/style2.css";
import "./components/fire";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Model from "./components/Model";
import History from "./components/History";

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
      <Route path="/history">
        <History />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);
