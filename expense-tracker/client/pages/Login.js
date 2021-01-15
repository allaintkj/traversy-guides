import React from 'react';

function Login() {
    return (
        <div>
            <h1 className='subtitle has-text-centered'>Login</h1>
            <p className='has-text-centered help is-danger'>Error message goes here.</p>

            <form>
                <div className='field'>
                    <label className='label'>Name</label>

                    <div className='control'>
                        <input className='input' type='text' />
                    </div>

                    <p className='help is-danger'>Validation message goes here.</p>
                </div>

                <div className='field'>
                    <label className='label'>Password</label>

                    <div className='control'>
                        <input className='input' type='text' />
                    </div>

                    <p className='help is-danger'>Validation message goes here.</p>
                </div>

                <div className='control level has-text-centered py-5'>
                    <button className='button is-link'>Login</button>

                    <div className='py-5'>
                        <a href='/create'>No account? Create one!</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
