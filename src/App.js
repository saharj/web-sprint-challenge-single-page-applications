import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import BuildPizza from "./BuildPizza";

const App = () => {
  let history = useHistory();
  const addToOrder = (orderData) => {
    // debugger;
    console.log(orderData);
    axios
      .post(URL, orderData)
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((err) => {
        debugger;
      });
  };
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </header>
      <div className="container">{/* <Home /> */}</div>
      <Switch>
        <Route path="/pizza">
          <BuildPizza addToOrder={addToOrder} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
