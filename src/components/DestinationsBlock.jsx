import React from 'react';
const DestinationsBlock = ({ info, clickMe }) => {


    return (
        <div>
            <div className='travelBlock'>
                <div>
                    <img className="imgTravel" src={info.image} alt="image" />
                </div>
                <h2 className='titleTravel'>
                    {info.name}
                </h2>
                <p className='taglineTravel'>
                    {info.tagline}
                </p>

                <p className='lethalTravel'>
                    Léthalité:
                    {info.lethal}
                </p>

                <p className='journeyTravel'>
                    Date du départ:
                    {info.journey_date}
                </p>

                <p className='descriptionTravel'>
                    {info.description.paragraph_1}
                    {info.description.paragraph_2}
                    {info.description.paragraph_3}
                </p>

                <button type='button' className='buttonDestination' onClick={() => clickMe(info)}>Réserver</button>
            </div>
        </div>
    );
};

export default DestinationsBlock;