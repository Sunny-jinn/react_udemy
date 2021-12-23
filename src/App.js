import React from 'react';

import Header from './components/UI/Header';
import MealItemForm from './components/Meals/MealItemForm';
import MealsSummary from './components/Meals/MealsSummary';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <MealItemForm />
    </React.Fragment>
  );
};

export default App;
