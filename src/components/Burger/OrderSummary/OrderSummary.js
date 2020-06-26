import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey} </span>:
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>You Order</h3>
        <p>A delecious burger with the following ingrdients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>
          <strong>Total Calories: {this.props.calories.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
