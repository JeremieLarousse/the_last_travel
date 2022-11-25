import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { characters } from '../data.js';
import '../style/Agency.css'

const Agency = () => {
    return (
        <div>
            <Header />
            <div className='cardContainer'>
                {characters.map((character) => {
                    return (
                        <div key={character.id} image={character.image} name={character.name} age={character.age}
                            sign={character.sign}
                            beliefs={character.beliefs}
                            degree={character.degree}
                            speciality={character.speciality}>
                            <div className='card'>
                                <div className='photoPortrait'><img src={character.image} alt="Agent Portrait" /></div>
                                <h3>{character.name}</h3>
                                <div className='cardContent'>
                                    <p><span>Âge : </span>{character.age} ans</p>
                                    <p><span>Signe particulier : </span>{character.sign}</p>
                                    <p><span>Diplôme : </span>{character.degree}</p>
                                    <p><span>Spécialité : </span>{character.speciality}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />

        </div >
    );
};

export default Agency;