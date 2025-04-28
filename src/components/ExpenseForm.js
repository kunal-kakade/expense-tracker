import React from 'react';

const ExpenseForm = ({ title, amount, date, category, setTitle, setAmount, setDate, setCategory, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">Save Expense</button>
    </form>
  );
};

export default ExpenseForm;
