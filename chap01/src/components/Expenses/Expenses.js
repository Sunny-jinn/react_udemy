import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  const newExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={newExpenses} />
        <ExpensesList items={newExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
