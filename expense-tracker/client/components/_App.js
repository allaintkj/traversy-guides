import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Dashboard from '../pages/Dashboard';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

const App = () => {
    return (
        <div className='expenses'>
            <Header />

            <section className='section pt-0'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-4 is-offset-4'>
                            <Switch>
                                <Route component={Login} exact path='/' />
                                <Route component={CreateAccount} path='/create' />
                                <Route component={Dashboard} path='/dashboard' />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
