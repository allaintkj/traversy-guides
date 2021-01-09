import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial
const initialState = {
    transactions: []
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function addTx(_tx) {
        dispatch({
            type: 'ADD_TX',
            payload: _tx
        });
    }

    function delTx(_id) {
        dispatch({
            type: 'DEL_TX',
            payload: _id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTx,
            delTx
        }}>

            {children}
            
        </GlobalContext.Provider>
    );
};

