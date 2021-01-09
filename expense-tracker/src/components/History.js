import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const History = () => {
    const context = useContext(GlobalContext);

    return (
        <div className='pt-5'>
            <h1 className='subtitle'>History</h1>
            <hr className='hr' />

            <div className='columns has-text-centered m-0'>
                <div className='column p-0'>
                    {context.transactions.map((transaction, index) => {
                        return (
                            <div className='card level m-0 p-2'
                                key={`transaction-${index}-${transaction.label}-${transaction.amount}`}>
                                <div>{transaction.label}</div>
                                <div>{transaction.amount}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default History;
