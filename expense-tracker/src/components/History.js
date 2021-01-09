import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import trashIcon from '../img/trash-solid.svg';

const History = () => {
    const context = useContext(GlobalContext);

    return (
        <div className='pt-5'>
            <h1 className='subtitle'>History</h1>
            <hr className='hr' />

            <div className='columns m-0'>
                <div className='column p-0'>
                    {context.transactions.map((transaction, index) => {
                        let amtClass = transaction.amount < 0 ? 'has-text-danger' : 'has-text-success';

                        return (
                            <div className='card columns is-mobile level m-0 p-2'
                                key={`transaction-${index}-${transaction.label}-${transaction.amount}`}>
                                <div className='column'>{transaction.label}</div>

                                <div className={`column ${amtClass} has-text-right  `}>
                                    ${Math.abs(transaction.amount)}
                                </div>

                                <div className='column trash-icon has-text-centered'>
                                    <img src={trashIcon} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default History;
