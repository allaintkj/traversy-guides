import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';

import { GlobalContext } from '../context/GlobalState';

const Header = props => {
    const isAuthed = localStorage.getItem('token');
    const context = useContext(GlobalContext);

    useEffect(() => {}, [context.auth]);

    const userSection = () => {
        return (
            <div className='level'>
                <h2 className='subtitle m-3'>Welcome, {localStorage.getItem('name')}!</h2>

                <div className='control'>
                    <button className='button is-danger'
                        onClick={event => {
                            event.preventDefault();
                            localStorage.clear();
                            context.deauthUser();
                            props.history.push('/');
                        }}>
                        Log Out
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section className='section has-text-centered pb-0'>
            <div className='container'>
                <div className={`level ${isAuthed ? '' : 'is-justify-content-center'}`}>
                    <h1 className='title m-0'>Expense Tracker</h1>

                    {isAuthed ? userSection() : null}
                </div>
            </div>

            <hr className='hr' />
        </section>
    );
};

export default withRouter(Header);
