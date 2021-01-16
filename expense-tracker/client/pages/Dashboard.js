import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';

import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import History from '../components/History';
import AddTransaction from '../components/AddTransaction';

function Dashboard(props) {
    const context = useContext(GlobalContext);

    useEffect(() => {
        if (!localStorage.getItem('token')) { props.history.push('/'); }
    }, [history, context.auth]);

    return (
        <React.Fragment>
            <Balance />

            <IncomeExpenses />

            <AddTransaction />

            <History />
        </React.Fragment>
    );
}

export default Dashboard;
