import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Favoritos from "../pages/Favorite";
import Home from "../pages/Home";

const Routes = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/favoritos" element={<Favoritos />} />
  </Switch>
);
export default Routes;