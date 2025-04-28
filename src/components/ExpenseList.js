import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ul>
      {expenses.map((exp) => (
        <ExpenseItem key={exp._id} expense={exp} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ExpenseList;
