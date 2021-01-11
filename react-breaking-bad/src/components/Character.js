import React from 'react';

const Character = props => {
    const showAppearances = () => {
        return (
            <div className='row columns m-0'>
                <div className='column is-6 has-text-weight-bold'>Appearances</div>
                <div className='column is-6'>
                    {props.character.appearance.map((season, index) => {
                        return (
                            <p key={`${props.character.name}-${season}-${index}`}>
                                Season {season}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className='column is-4'>
            <div className='card has-background-success-dark has-text-white'>
                <div className='card-image'>
                    <figure className='image'>
                        <img src={props.character.img} />
                    </figure>
                </div>

                <div className='card-content is-size-7'>
                    <h1 className='subtitle has-text-centered has-text-white'>{props.character.name}</h1>

                    <div className='row columns m-0'>
                        <div className='column is-6 has-text-weight-bold'>Portrayed By</div>
                        <div className='column is-6'>{props.character.portrayed}</div>
                    </div>

                    <div className='row columns m-0'>
                        <div className='column is-6 has-text-weight-bold'>Nickname</div>
                        <div className='column is-6'>{props.character.nickname}</div>
                    </div>

                    <div className='row columns m-0'>
                        <div className='column is-6 has-text-weight-bold'>Occupation</div>
                        <div className='column is-6'>
                            {props.character.occupation.map((occ, index) => {
                                return (
                                    <p key={`${props.character.name}-${occ}-${index}`}>
                                        {occ}
                                        {index == props.character.occupation.length - 1 ? '' : ','}
                                    </p>
                                );
                            })}
                        </div>
                    </div>

                    {props.character.appearance ? showAppearances() : null}
                </div>

                <footer className='card-footer'>
                    <div className='card-footer-item'>
                        {props.character.birthday}
                    </div>
                    <div className='card-footer-item has-text-weight-bold'>
                        {props.character.status}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Character;
