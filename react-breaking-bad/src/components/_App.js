import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Header from './Header';
import Search from './Search';
import CharGrid from './CharGrid';

const App = () => {
    const [chars, setChars] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchChars = async() => {
            const result = await axios('https://breakingbadapi.com/api/characters');
            setChars(result.data);
        };

        fetchChars();
    }, []);

    return (
        <React.Fragment>
            <Header />

            <section className='container'>
                <Search setFilter={value => setFilter(value)} />

                <CharGrid characters={chars} filter={filter} />
            </section>
        </React.Fragment>
    );
};

export default App;
