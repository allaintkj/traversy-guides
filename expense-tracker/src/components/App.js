import React from 'react';

import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import History from './History';
import AddTransaction from './AddTransaction';

function App() {
    return (
        <div className='expenses'>
            <Header />

            <section className='section'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-4 is-offset-4'>
                            <Balance />

                            <IncomeExpenses />

                            <History />

                            <AddTransaction />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
