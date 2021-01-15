import React, { useState } from 'react';

function CreateAccount() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1 className='subtitle has-text-centered'>Create Account</h1>
            <p className='has-text-centered help is-danger'>Error message goes here.</p>

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

                    <p className='help is-danger'>Validation message goes here.</p>
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

                    <p className='help is-danger'>Validation message goes here.</p>
                </div>

                <div className='control level has-text-centered py-5'>
                    <button className='button is-success'
                        onClick={event => {
                            event.preventDefault();
                            console.log(name);
                            console.log(password);
                        }}>
                        Create
                    </button>

                    <div className='py-5'>
                        <a href='/'>Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateAccount;
