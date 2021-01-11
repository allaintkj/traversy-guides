import React from 'react';

const Character = () => {
    return (
        <div className='column is-4'>
            <div className='card'>
                <div className='card-image'>
                    <figure className='image'>
                        <img src='https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg' />
                    </figure>
                </div>

                <div className='card-content is-size-7'>
                    <h1 className='subtitle'>Walter White</h1>

                    <div className='row columns m-0'>
                        <div className='column is-6 has-text-weight-bold'>Portayed By</div>
                        <div className='column is-6'>Bryan Cranston</div>
                    </div>

                    <div className='row columns m-0 has-background-light'>
                        <div className='column is-6 has-text-weight-bold'>Nickname</div>
                        <div className='column is-6'>Heisenberg</div>
                    </div>

                    <div className='row columns m-0'>
                        <div className='column is-6 has-text-weight-bold'>Occupation</div>
                        <div className='column is-6'>
                            <p>- High School Chemistry Teacher</p>
                            <p>- Meth King Pin</p>
                        </div>
                    </div>

                    <div className='row columns m-0 has-background-light'>
                        <div className='column is-6 has-text-weight-bold'>Appearances</div>
                        <div className='column is-6'>
                            <p>Season 1</p>
                            <p>Season 2</p>
                            <p>Season 3</p>
                            <p>Season 4</p>
                            <p>Season 5</p>
                        </div>
                    </div>
                </div>

                <footer className='card-footer'>
                    <div className='card-footer-item'>
                        <span className='has-text-weight-bold'>Born&nbsp;</span>
                        09-07-1958
                    </div>
                    <div className='card-footer-item has-text-weight-bold'>
                        Deceased
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Character;
