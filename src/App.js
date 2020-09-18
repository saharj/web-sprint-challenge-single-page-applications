import React, { useState } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
// import axios from "axios";

import Home from "./Home";
import BuildPizza from "./BuildPizza";

const App = () => {
  const [orders, updateOrders] = useState([]);
  let history = useHistory();
  const addToOrder = (orderData) => {
    updateOrders([...orders, orderData]);
    history.push("/");
    // axios
    //   .post(URL, orderData)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     debugger;
    //   });
  };
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </header>
      <div className="container">
        <Switch>
          <Route path="/pizza">
            <BuildPizza addToOrder={addToOrder} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <hr />
        {orders.length > 0 &&
          orders.map((order, i) => (
            // using key={i+10} so that numbers don't overlap with the keys of the <li>s
            <div key={i + 10}>
              <p>
                <span>Name:</span>
                {order.name}
              </p>
              <p>
                <span>Size:</span>
                {order.size}
              </p>
              <p>
                <span>Instructions:</span>
                {order.instructions}
              </p>
              <p>
                <span>Toppings:</span>
                <ul>
                  {order.toppings.map((topping, i) => (
                    <li key={i}>{topping}</li>
                  ))}
                </ul>
              </p>
              <hr />
            </div>
          ))}
      </div>
    </>
  );
};
export default App;
