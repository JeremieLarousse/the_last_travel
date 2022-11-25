import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import "../style/Destination.css";
import DestinationsTitle from '../components/Destinations/DestinationsTitle';
import DestinationsBlock from '../components/Destinations/DestinationsBlock';
import { destinations } from "../data";
// import { defaultMethod } from 'react-router-dom/dist/dom';

const Destinations = () => {

    const [booking, setBooking] = React.useState(false);

    const clickMe = () => {
        setBooking(!booking);
    }


    return (
        <div>
            <Header />

            <div className='titleDestination'>
                <DestinationsTitle />
            </div>

            <div className='destinationForTravel'>


                {destinations.map((info) => (
                    <div>
                        <DestinationsBlock
                            key={info.id}
                            info={info}
                            clickMe={clickMe}
                        />
                    </div>

                ))}



            </div>

            <Footer />
        </div>
    );
};

export default Destinations;