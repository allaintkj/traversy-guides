import React from 'react';

import Character from './Character';

const CharGrid = props => {
    return (
        <div className='columns is-flex-wrap-wrap m-0'>
            {props.characters.map((char, index) => {
                return <Character character={char} key={`chargrid-${index}-${char.name}`} />;
            })}
        </div>
    );
};

export default CharGrid;
