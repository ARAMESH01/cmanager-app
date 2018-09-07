import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/{`match.path/user`}" exact component={User} /> */}
    <Route path="/user" exact component={User} />
    <Route path="/user/:userIdParam" exact component={User} />
  </Switch>
);
