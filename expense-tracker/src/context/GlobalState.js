import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial
const initialState = {
    transactions: [{
        _id: 1,
        amount: 500,
        label: 'Salary'
    }, {
        _id: 2,
        amount: -50,
        label: 'Insurance'
    }, {
        _id: 3,
        amount: -100,
        label: 'Rent'
    }, {
        _id: 4,
        amount: -20,
        label: 'Food'
    }]
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function delTransaction(_id) {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: _id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction
        }}>

            {children}
            
        </GlobalContext.Provider>
    );
};

