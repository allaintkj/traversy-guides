import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial
const initialState = {
    transactions: [{
        amount: 500,
        label: 'Salary'
    }, {
        amount: -50,
        label: 'Insurance'
    }, {
        amount: -100,
        label: 'Rent'
    }, {
        amount: -20,
        label: 'Food'
    }]
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>

            {children}
            
        </GlobalContext.Provider>
    );
};

