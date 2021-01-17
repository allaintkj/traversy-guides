import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const context = useContext(GlobalContext);
    const amounts = context.transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total, amount) => { return (total + amount); }, 0).toFixed(2);

    return (
        <div className='columns m-0 p-1'>
            <div className='column card has-text-centered m-1 p-2'>
                <h1 className='subtitle'>Balance</h1>
                <h1 className='title'>${total}</h1>
            </div>
        </div>
    );
};

export default Balance;
