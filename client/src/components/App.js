import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import EnchantedForestsList from "./EnchantedForestsList";
import NewEnchantedForestForm from "./NewEnchantedForestForm";

const App = props => {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EnchantedForestsList} />
          <Route exact path="/enchanted-forests" component={EnchantedForestsList} />
          <Route exact path="/enchanted-forests/new" component={NewEnchantedForestForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
