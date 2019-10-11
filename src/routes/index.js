import React from "react";
import { Switch } from "react-router";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={Dashboard} />
    </Switch>
  );
}
