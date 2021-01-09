import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const context = useContext(GlobalContext);
    const amounts = context.transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total, amount) => { return (total + amount); }, 0).toFixed(2);

    return (
        <div className='columns'>
            <div className='column card m-1 has-text-centered'>
                <h1 className='subtitle'>Balance</h1>
                <h1 className='title'>${total}</h1>
            </div>
        </div>
    );
};

export default Balance;
