import React from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  const deleteExpenseHandler = () => {
    props.onDeleteExpense(props.id)
  }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <div className="delete-button" onClick={deleteExpenseHandler}>&times;</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
