import React from 'react';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>{props.badge}</div>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
