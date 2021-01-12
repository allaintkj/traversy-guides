import React from 'react';

import logo from '../img/logo.svg';

const Header = () => {
    return (
        <section className='hero'>
            <div className='hero-body has-text-centered'>
                <div className='container'>
                    <img className='beakr-logo' src={logo} />
                </div>

                <div className='container'>
                    <h1 className='subtitle'>A Breaking Bad Character Encyclopedia</h1>
                </div>
            </div>
        </section>
    );
};

export default Header;
