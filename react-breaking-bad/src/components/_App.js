import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Header from './Header';
import CharGrid from './CharGrid';

const App = () => {
    const [chars, setChars] = useState([]);

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
                <CharGrid characters={chars} />
            </section>
        </React.Fragment>
    );
};

export default App;
