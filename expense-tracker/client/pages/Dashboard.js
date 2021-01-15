import React from 'react';

import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import History from '../components/History';
import AddTransaction from '../components/AddTransaction';

function Dashboard() {
    return (
        <React.Fragment>
            <Balance />

            <IncomeExpenses />

            <History />

            <AddTransaction />
        </React.Fragment>
    );
}

export default Dashboard;
