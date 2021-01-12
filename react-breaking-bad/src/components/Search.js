import React from 'react';

const Search = props => {
    return (
        <form className='columns m-0'>
            <div className='field column'>
                <div className='control'>
                    <label className='label'>Filter by character name</label>
                    <input className='input'
                        onChange={event => {
                            event.preventDefault();
                            props.setFilter(event.target.value);
                        }}
                        placeholder='character name'
                        type='text' />
                </div>
            </div>
        </form>
    );
};

export default Search;
