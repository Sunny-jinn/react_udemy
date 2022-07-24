import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   EnteredTitle: '',
  //   EnteredAmount: '',
  //   EnteredDate: '',
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, EnteredTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault(); //req재전송을 막을 수 있음. 페이지 재배치 x

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //parent component에 값 전달
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  const [clicked, setClicked] = useState(true);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  if (clicked) {
    return (
      <div>
        <button onClick={clickHandler}>Show</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={clickHandler}>
          Hide
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
