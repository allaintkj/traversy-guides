import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const context = useContext(GlobalContext);
    const amounts = context.transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total, amount) => { return (total + amount); }, 0);

    return (
        <div className='px-0 pb-5'>
            <h1 className='subtitle'>Balance</h1>
            <h1 className='title'>${total}</h1>
        </div>
    );
};

export default Balance;
