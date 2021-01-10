import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import App from './components/_App';

import './style.scss';

ReactDOM.render((
    <Router>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </Router>
), document.getElementById('react-container'));
