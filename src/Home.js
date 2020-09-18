import React from "react";
import { Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="heroImage">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="/pizza">Pizza?</Link>
      </div>
    </div>
  );
};
export default Home;
