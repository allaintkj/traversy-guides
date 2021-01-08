import React from 'react';

const IncomeExpenses = () => {
    return (
        <div className='columns has-text-centered m-0'>
            <div className='column card is-half'>
                <h1 className='subtitle'>
                    income<br />
                    <span className='has-text-success'>$500.00</span>
                </h1>
            </div>
            <div className='column card is-half'>
                <h1 className='subtitle'>
                    expenses<br />
                    <span className='has-text-danger'>$260.00</span>
                </h1>
            </div>
        </div>
    );
};

export default IncomeExpenses;
