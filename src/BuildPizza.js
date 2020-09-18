import React, { useState } from "react";

const BuildPizza = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings: [],
    instructions: "",
  });
  const [activeBtn, setActiveBtn] = useState(true);

  const handleSubmit = () => {
    props.addToOrder(formState);
  };

  const onInputChange = (e) => {
    const target = e.target;
    console.log(target.name);
    console.log(target);
    if (target.type === "checkbox") {
      if (formState.toppings.includes(target.name)) {
        // setFormState(formState.toppings.filter((item) => item !== target.name));
      } else {
        setFormState({
          ...formState,
          toppings: [...formState.toppings, target.name],
        });
      }
    } else {
      setFormState({ ...formState, [target.name]: target.value });
    }
  };

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
                placeholder="Your name"
                onChange={onInputChange}
              />
            </label>
          </li>
          <li>
            <label htmlFor="sizeSelect">Size</label>
            <select name="size" value={formState.size} onChange={onInputChange}>
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
                    name="Mushroom"
                    checked={formState.toppings.Mushroom}
                    onChange={onInputChange}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="toppings">
                  Sausage
                  <input
                    type="checkbox"
                    name="Sausage"
                    checked={formState.toppings.Sausage}
                    onChange={onInputChange}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="toppings">
                  Olives
                  <input
                    type="checkbox"
                    name="Olives"
                    checked={formState.toppings.Olives}
                    onChange={onInputChange}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="toppings">
                  Bell pepper
                  <input
                    type="checkbox"
                    name="pepper"
                    checked={formState.toppings.pepper}
                    onChange={onInputChange}
                  />
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label htmlFor="instructionsInput">
              Any special instructions?
              <textarea
                rows="4"
                cols="50"
                name="instructions"
                onChange={onInputChange}
              />
            </label>
          </li>
        </ul>

        <button
          className={`btn-primary btn ${activeBtn ? "active" : "disabled"}`}
        >
          Add to Order
        </button>
      </form>
    </div>
  );
};
export default BuildPizza;
