import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import Navigation from "./components/Navigation";

const App = () => (
  <div className="App">
    <Navigation />
    <Routes />
  </div>
);

export default App;
