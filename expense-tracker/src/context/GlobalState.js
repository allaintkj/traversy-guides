import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial
const initialState = {
    transactions: [{
        id: 1,
        amount: 500,
        label: 'Salary'
    }, {
        id: 2,
        amount: -50,
        label: 'Insurance'
    }, {
        id: 3,
        amount: -100,
        label: 'Rent'
    }, {
        id: 4,
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

