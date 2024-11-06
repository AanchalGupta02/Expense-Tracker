import React from 'react';

const ExpenseItem = ({ expense, onDelete }) => (
    <li>
        {expense.category}: ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
        <button onClick={() => onDelete(expense._id)}>Delete</button>
    </li>
);

export default ExpenseItem;