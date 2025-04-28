import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const fetchExpenses = async () => {
    const res = await fetch('http://localhost:5000/api/expenses', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();
    setExpenses(data);
  };

  const addExpense = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` },
      body: JSON.stringify({ title, amount, category, date }),
    });
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h2>Total Balance: ${total}</h2>
      <form onSubmit={addExpense}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((exp) => (
          <li key={exp._id}>
            {exp.title} - ${exp.amount} ({exp.category}) on {new Date(exp.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;