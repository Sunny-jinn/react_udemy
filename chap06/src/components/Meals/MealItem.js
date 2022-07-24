import React, { useState } from 'react';
import classes from './MealItem.module.css';

const Mealitem = (props) => {
  const [badge, setBadge] = useState(0);

  const addBadge = () => {
    setBadge(badge + 1);
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>${props.price}</div>
      <div>
        <input value={1}></input>
      </div>
      <div>
        <button onClick={addBadge}>+Add</button>
      </div>
    </div>
  );
};

export default Mealitem;
