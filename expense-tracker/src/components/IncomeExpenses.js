import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const context = useContext(GlobalContext);
    const amounts = context.transactions.map(transaction => transaction.amount);
    const income = amounts.reduce((income, amount) => { return (amount < 0 ? income : income + amount); }, 0);
    const expenses = amounts.reduce((expense, amount) => { return (amount < 0 ? expense + amount : expense); }, 0);

    return (
        <div className='columns has-text-centered m-0'>
            <div className='column card is-half'>
                <h1 className='subtitle is-uppercase'>
                    <span className='is-size-6'>income</span><br />
                    <span className='has-text-success'>${income}</span>
                </h1>
            </div>
            <div className='column card is-half'>
                <h1 className='subtitle is-uppercase'>
                    <span className='is-size-6'>expenses</span><br />
                    <span className='has-text-danger'>${Math.abs(expenses)}</span>
                </h1>
            </div>
        </div>
    );
};

export default IncomeExpenses;
