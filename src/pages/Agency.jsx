import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { characters } from '../data.js';

const Agency = () => {
    return (
        <div>
            <Header />
            <div>
                {/* {characters.map((character) => {
                    return (
                        <div className='cardContainer' key={character.id}>

                            <img src={character.image} alt="Agent Portrait" />
                            <h3>{characters}</h3>

                        </div>
                    )
                })} */}
            </div>

            <Footer />
        </div>
    );
};

export default Agency;