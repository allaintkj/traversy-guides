import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';

import { GlobalContext } from '../context/GlobalState';

import trashIcon from '../img/trash-solid.svg';

const History = props => {
    const context = useContext(GlobalContext);

    useEffect(() => {
        const getTx = async() => {
            const res = await context.getTx(localStorage.getItem('_id'));
            if (res === 401) { props.history.push('/'); }
        };

        getTx();
    }, []);

    return (
        <div className='pt-5'>
            <h1 className='subtitle'>History</h1>
            <hr className='hr' />

            <div className='columns m-0'>
                <div className='column p-0'>
                    {context.transactions.map((transaction, index) => {
                        let amtClass = transaction.amount < 0 ? 'has-text-danger' : 'has-text-success';

                        return (
                            <div className='card columns is-mobile level m-1 p-0'
                                key={`transaction-${index}-${transaction.label}-${transaction.amount}`}>
                                <div className='column is-5'>{transaction.label}</div>

                                <div className={`column is-5 ${amtClass} has-text-right has-text-weight-bold`}>
                                    ${Math.abs(transaction.amount)}
                                </div>

                                <div className='column is-2 trash-icon has-text-centered'>
                                    <img onClick={() => {
                                        const delTx = async() => {
                                            const res = await context.delTx(transaction._id);
                                            if (res === 401) { props.history.push('/'); }
                                        };

                                        delTx();
                                    }} src={trashIcon} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default withRouter(History);
