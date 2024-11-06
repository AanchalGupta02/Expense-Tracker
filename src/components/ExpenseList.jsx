
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDelete }) => (
    <ul>
        {expenses.map((expense) => (
            <ExpenseItem key={expense._id} expense={expense} onDelete={onDelete} />
        ))}
    </ul>
);

export default ExpenseList;
