import axios from 'axios';
import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// initial
const initialState = {
    api: 'http://localhost:5050',
    transactions: [],
    error: null,
    loading: true
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    async function getTx() {
        try {
            const res = await axios.get(`${state.api}/api/v1/transactions`);

            dispatch({
                type: 'GET_TX',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TX_ERROR',
                payload: err.response.data.error
            });
        }
    }

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
            error: state.error,
            loading: state.loading,
            transactions: state.transactions,
            addTx,
            delTx,
            getTx
        }}>

            {children}
            
        </GlobalContext.Provider>
    );
};

