import React from 'react';

import logo from '../img/logo.svg';

const Header = () => {
    return (
        <section className='hero'>
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <img className='beakr-logo' src={logo} />
                </div>
            </div>
        </section>
    );
};

export default Header;
