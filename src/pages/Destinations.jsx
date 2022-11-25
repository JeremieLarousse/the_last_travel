import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import "../style/Destination.css";
import DestinationsBlock from '../components/DestinationsBlock';
import { destinations } from "../data";

import Reservation from '../components/Reservation';

const Destinations = () => {

    const [booking, setBooking] = React.useState(false);

    const clickMe = () => {
        setBooking(!booking);
    }

    return (
        <div>
            <Header />
            <div className='destinationsContainer'>
                <h1>Nos Destinations</h1>
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
            </div>
            <Footer />
        </div>
    );
};

export default Destinations;