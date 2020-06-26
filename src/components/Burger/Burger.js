import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import { withRouter } from "react-router-dom";

const burger = (props) => {
  let transfromedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transfromedIngredients.length === 0) {
    transfromedIngredients = <p>Please Start Adding Ingredients</p>;
  }
  return (
    <div>
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transfromedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    </div>
  );
};

// export default withRouter(burger);
export default burger;
