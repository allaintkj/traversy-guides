import React, { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../context/GlobalState';

function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(GlobalContext);
    const isError = context.error !== null;
    const isErrorUsername = isError && context.error.toLowerCase().includes('username');
    const isErrorPassword = isError && context.error.toLowerCase().includes('password');

    useEffect(() => {
        if (localStorage.getItem('isAuthed')) { props.history.push('/dashboard'); }
    }, [context.auth._id]);

    return (
        <div>
            <h1 className='subtitle has-text-centered'>Login</h1>

            <p className='has-text-centered help is-danger'>
                {isError ? ((isErrorUsername || isErrorPassword) ? null : context.error) : null}
            </p>

            <form>
                <div className='field'>
                    <label className='label'>Name</label>

                    <div className='control'>
                        <input className='input'
                            name='name'
                            onChange={event => {
                                event.preventDefault();
                                setName(event.target.value);
                            }} type='text'
                            value={name} />
                    </div>

                    <p className='help is-danger'>
                        {isError ? (isErrorUsername ? context.error : null) : null}
                    </p>
                </div>

                <div className='field'>
                    <label className='label'>Password</label>

                    <div className='control'>
                        <input className='input'
                            name='password'
                            onChange={event => {
                                event.preventDefault();
                                setPassword(event.target.value);
                            }} type='password'
                            value={password} />
                    </div>

                    <p className='help is-danger'>
                        {isError ? (isErrorPassword ? context.error : null) : null}
                    </p>
                </div>

                <div className='control level has-text-centered py-5'>
                    <button className='button is-link'
                        onClick={event => {
                            event.preventDefault();
                            context.authUser({
                                name: name,
                                password: password
                            });
                        }}>
                        Login
                    </button>

                    <div className='py-5'>
                        <a href='/create'>No account? Create one!</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
