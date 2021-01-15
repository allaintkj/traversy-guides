import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Header from './Header';
import Search from './Search';
import CharGrid from './CharGrid';

const App = () => {
    const [chars, setChars] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChars = () => {
            axios('https://breakingbadapi.com/api/characters').then(res =>{
                setChars(res.data);
                setLoading(false);
            });
        };

        fetchChars();
    }, []);

    const displayLoader = () => {
        return (
            <div className='columns m-0'>
                <div className='column spinner'>
                    <div className='lds-dual-ring' />
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            <Header />

            <section className='container'>
                <Search setFilter={value => setFilter(value)} />

                <div className='container'>
                    {loading ? displayLoader() : null}
                </div>

                <CharGrid characters={chars} filter={filter} />
            </section>
        </React.Fragment>
    );
};

export default App;
