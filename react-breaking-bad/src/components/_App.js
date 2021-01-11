import React from 'react';

import Header from './Header';
import Search from './Search';
import CharGrid from './CharGrid';

const App = () => {
    return (
        <React.Fragment>
            <Header />

            <section className='container'>
                <Search />

                <CharGrid />
            </section>
        </React.Fragment>
    );
};

export default App;
