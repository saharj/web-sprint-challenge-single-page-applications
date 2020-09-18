import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

const BuildPizza = () => {
  const [formState, setFormState] = useState({});
  const [activeBtn, setActiveBtn] = useState(false);

  const handleSubmit = () => {};

  const onInputChange = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="nameInput">
              Name
              <input
                id="nameInput"
                type="string"
                name="name"
                value={formState.name}
                placeholder="Name of the pizza"
                onChange={onInputChange}
              />
            </label>
          </li>
          <li>
            <label htmlFor="emailInput">Size</label>
            <select name="pets" id="pet-select">
              <option value="">--Please choose a size--</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </li>
          <li>
            <span>Choose you toppings:</span>
            <ul>
              <li>
                <label htmlFor="toppings">
                  Mushroom
                  <input
                    type="checkbox"
                    name="toppings"
                    checked={false}
                    onChange={onInputChange}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="toppings">
                  Sausage
                  <input
                    type="checkbox"
                    name="toppings"
                    checked={false}
                    onChange={onInputChange}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="toppings">
                  Olives
                  <input
                    type="checkbox"
                    name="toppings"
                    checked={false}
                    onChange={onInputChange}
                  />
                </label>
              </li>
            </ul>
          </li>
        </ul>

        <button
          className={`btn-primary btn ${activeBtn ? "active" : "disabled"}`}
        >
          Order
        </button>
      </form>
    </div>
  );
};
export default BuildPizza;
