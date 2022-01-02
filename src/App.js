import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Food',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'Desk',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'Couch',
    amount: 1250,
    date: new Date(2022, 2, 14),
  },
  {
    id: 'e6',
    title: 'Laptop',
    amount: 1450,
    date: new Date(2022, 11, 2),
  },
  {
    id: 'e7',
    title: 'Table',
    amount: 680,
    date: new Date(2022, 8, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevState) => {
      return prevState.filter((expense) => {
        return expense.id !== id;
      });
    });
  };

  return (
    <div>
      <header>
        <h1>EXPENSE TRACKER</h1>
      </header>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
};

export default App;
