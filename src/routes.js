import React from "react";
import { Switch, Route } from "react-router-dom";

import Catogories from "./components/Pages/Category/Catogories";
// import SubCatogories from './pages/SubCatogories';
import Welcome from "./components/Pages/Welcome/welcome";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/categories" component={Catogories} />
      {/* <Route path="/subcatogories" component={SubCatogories} /> */}
    </Switch>
  );
}
