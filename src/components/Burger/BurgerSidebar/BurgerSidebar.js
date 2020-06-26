import React from "react";
import classes from "./BurgerSidebar.module.css";

const BurgerSidebar = (props) => {
  return (
    <div className={classes.front}>
      <div className={classes.Calorimeter}>
        <div>
          <h1>Burger</h1>
        </div>
        <div>
          <p className={classes.calories1}>
            ${props.price.toFixed(2)} | {props.calories} Cals
          </p>
          <p className={classes.calories2}>CLASSIC BURGER</p>
        </div>
        <div className={classes.mainButton}>
          <button className={classes.button} onClick={props.ordered}>
            ADD TO BAG
          </button>
          <button className={classes.button}>ADD TOPPINGS</button>
        </div>
        {/* <div className={classes.text}>
          2,000 calories a day is used for general nutrition advice, but calorie
          needs vary. Additional nutrition information available upon request.
        </div> */}
      </div>
    </div>
  );
};

export default BurgerSidebar;
