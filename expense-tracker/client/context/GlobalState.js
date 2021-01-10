import axios from 'axios';
import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// initial
const initialState = {
    api: 'http://localhost:8080',
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

    async function addTx(_tx) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post(`${state.api}/api/v1/transactions`, _tx, config);

            dispatch({
                type: 'ADD_TX',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TX_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function delTx(_id) {
        try {
            await axios.delete(`${state.api}/api/v1/transactions/${_id}`);

            dispatch({
                type: 'DEL_TX',
                payload: _id
            });
        } catch (err) {
            dispatch({
                type: 'TX_ERROR',
                payload: err.response.data.error
            });
        }
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

