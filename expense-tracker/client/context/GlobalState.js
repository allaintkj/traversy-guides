import axios from 'axios';
import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

import config from '../../config/config.json';

// initial
const initialState = {
    api: config.api,
    auth: {
        _id: null,
        name: null,
        token: null
    },
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
    async function getTx(_id) {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            };

            const res = await axios.get(`${state.api}/api/v1/transactions/${_id}`, config);

            dispatch({
                type: 'GET_TX',
                payload: res.data.data
            });
        } catch (err) {
            if (err.response.status == 401) {
                localStorage.removeItem('isAuthed');
                localStorage.removeItem('token');
                localStorage.removeItem('_id');
                localStorage.removeItem('name');

                dispatch({
                    type: 'DEAUTH_USER',
                    payload: initialState.auth
                });
            }

            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTx(_tx) {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
            if (err.response.status == 401) {
                localStorage.removeItem('isAuthed');
                localStorage.removeItem('token');
                localStorage.removeItem('_id');
                localStorage.removeItem('name');

                dispatch({
                    type: 'DEAUTH_USER',
                    payload: initialState.auth
                });
            }

            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function delTx(_id) {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            };

            await axios.delete(`${state.api}/api/v1/transactions/${_id}`, config);

            dispatch({
                type: 'DEL_TX',
                payload: _id
            });
        } catch (err) {
            if (err.response.status == 401) {
                localStorage.removeItem('isAuthed');
                localStorage.removeItem('token');
                localStorage.removeItem('_id');
                localStorage.removeItem('name');

                dispatch({
                    type: 'DEAUTH_USER',
                    payload: initialState.auth
                });
            }

            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addUser(user) {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const res = await axios.post(`${state.api}/api/v1/users/create`, user, config);

            localStorage.setItem('isAuthed', true);
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('_id', res.data.data._id);
            localStorage.setItem('name', res.data.data.name);

            dispatch({
                type: 'ADD_USER',
                payload: res.data.data
            });
        } catch (err) {
            localStorage.removeItem('isAuthed');
            localStorage.removeItem('token');
            localStorage.removeItem('_id');
            localStorage.removeItem('name');

            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function authUser(user) {
        const config = {
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            const res = await axios.post(`${state.api}/api/v1/users/auth`, user, config);

            localStorage.setItem('isAuthed', true);
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('_id', res.data.data._id);
            localStorage.setItem('name', res.data.data.name);

            dispatch({
                type: 'AUTH_USER',
                payload: res.data.data
            });

            dispatch({
                type: 'ERROR',
                payload: ''
            });
        } catch (err) {
            localStorage.removeItem('isAuthed');
            localStorage.removeItem('token');
            localStorage.removeItem('_id');
            localStorage.removeItem('name');

            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deauthUser() {
        localStorage.removeItem('isAuthed');
        localStorage.removeItem('token');
        localStorage.removeItem('_id');
        localStorage.removeItem('name');

        try {
            dispatch({
                type: 'DEAUTH_USER',
                payload: initialState.auth
            });
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err
            });
        }
    }

    return (
        <GlobalContext.Provider value={{
            auth: state.auth,
            error: state.error,
            loading: state.loading,
            transactions: state.transactions,
            addTx,
            delTx,
            getTx,
            addUser,
            authUser,
            deauthUser
        }}>

            {children}
            
        </GlobalContext.Provider>
    );
};

