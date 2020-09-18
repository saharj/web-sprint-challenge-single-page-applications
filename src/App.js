import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import BuildPizza from "./BuildPizza";

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </header>
      <div className="container">{/* <Home /> */}</div>
      <Switch>
        <Route path="/pizza">
          <BuildPizza />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
