import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import EnchantedForestList from "./EnchantedForestList";
import EnchantedForestShow from "./EnchantedForestShow";

const App = props => {
  return (
    <div className="grid-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EnchantedForestList} />
          <Route exact path="/enchanted-forests" component={EnchantedForestList} />
          <Route exact path="/enchanted-forests/:id" component={EnchantedForestShow} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default hot(App);
