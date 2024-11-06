import React from 'react';

const Summary = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return <h2>Total Expenses: ${total}</h2>;
};

export default Summary;