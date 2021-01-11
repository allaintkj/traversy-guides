import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/_App';

import './style.scss';

ReactDOM.render(<Router><App /></Router>, document.getElementById('react-container'));
