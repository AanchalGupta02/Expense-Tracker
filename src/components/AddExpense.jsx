import { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense({ amount: Number(amount), category, date });
        setAmount('');
        setCategory('');
        setDate('');
    };

    const inputStyle = {
        width: '300px'  // Adjust the width as needed
    };

    const buttonStyle = {
        width: '250px',
        
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
                style={inputStyle}
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                required
                style={inputStyle}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Add Expense</button>
        </form>
    );
};

export default AddExpense;
