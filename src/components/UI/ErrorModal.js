import React from 'react';
import classes from './ErrorModal.module.css';

const Errormodal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onRemoveError} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onRemoveError}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default Errormodal;
