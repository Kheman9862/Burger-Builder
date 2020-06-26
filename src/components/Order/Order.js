import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];
  const orderData = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  for (let orderName in props.orderData) {
    orderData.push({
      name: orderName,
      amount: props.orderData[orderName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "15px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  const orderOutput = orderData.map((od) => {
    return (
      <div
        style={{
          display: "inline-flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          margin: "0 8px",
          padding: "15px",
        }}
        key={od.name}
      >
        <div
          style={{
            textTransform: "Capitalize",
          }}
        >
          <strong> {od.name}:</strong>
        </div>
        <div>{od.amount}</div>
      </div>
    );
  });

  return (
    <div className={classes.Order}>
      <div className={classes.Beautify}>Ingredients:</div>
      <div> {ingredientOutput}</div>
      <div className={classes.Info}>
        <div>
          Price:{" "}
          <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
        </div>
        <div>
          Calories:
          <strong>
            {" "}
            {Number.parseFloat(props.calories).toFixed(2)} calories
          </strong>
        </div>
      </div>
      <div>
        <div>Customer Detail:</div>
        <div>{orderOutput}</div>
      </div>
    </div>
  );
};

export default order;
