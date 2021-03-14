import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

const Routes = () => (
  <Switch>
    <Route path="/:username">
      <UserPage />
    </Route>

    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
