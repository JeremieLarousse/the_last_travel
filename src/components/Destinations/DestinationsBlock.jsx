import React from 'react';
// import destinations from "../../data";

const DestinationsBlock = ({info, clickMe}) =>  {

    
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
    
            </div>

            <button type='button' onClick={()=>clickMe()}>Réservation</button>

        </div>
    );
};

export default DestinationsBlock;