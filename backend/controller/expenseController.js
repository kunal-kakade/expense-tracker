const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id });
  res.json(expenses);
};

exports.addExpense = async (req, res) => {
  const expense = new Expense({ ...req.body, user: req.user.id });
  await expense.save();
  res.status(201).json(expense);
};

exports.updateExpense = async (req, res) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(expense);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: 'Deleted' });
};