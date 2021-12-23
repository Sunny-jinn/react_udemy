import React from 'react';
import Mealitem from './MealItem';
import { DUMMY_MEALS } from './dummy-meals';
import Card from '../UI/Card';

const MealItemForm = () => {
  return (
    <Card>
      {DUMMY_MEALS.map((dummy) => (
        <Mealitem
          key={dummy.id}
          name={dummy.name}
          description={dummy.description}
          price={dummy.price}
        />
      ))}
    </Card>
  );
};

export default MealItemForm;
