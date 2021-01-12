import React from 'react';

import Character from './Character';

const CharGrid = props => {
    return (
        <div className='columns is-flex-wrap-wrap m-0'>
            {props.characters.map((char, index) => {
                let filterLower = props.filter.toLowerCase();
                let nameLower = char.name.toLowerCase();

                if (nameLower.includes(filterLower)) {
                    return <Character character={char} key={`chargrid-${index}-${char.name}`} />;
                }

                return null;
            })}
        </div>
    );
};

export default CharGrid;
