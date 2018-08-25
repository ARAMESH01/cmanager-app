import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Edit from "./components/Edit";
import UserView from "./components/UserView";
import PassWord from "./components/PassWord";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/user" exact component={User} />
    <Route path="/edit" exact component={Edit} />
    <Route path="/view" exact component={UserView} />
    <Route path="/password" exact component={PassWord} />
  </Switch>
);
