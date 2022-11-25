import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/Footer.css"


const Footer = () => {
    return (
        <div className='footerSection'>
            <div className='ghost'><img src={'/assets/the-last-travel-icon-ghost.svg'} alt="Ghost Illustration" /></div>
            <div className='footerBlock'>
                <div className='iconForward'>
                    <div className='tombstone'><img src={'/assets/the-last-travel-icon-tombstone.svg'} alt="Tombstone Illustration" /></div>
                    <div className='skullRaven'><img src={'/assets/the-last-travel-icon-skull-raven.svg'} alt="Skull with Raven Illustration" /></div>
                </div>
                <div className='footerContent'>
                    <p className='infoSuicide'>Si l'un de vos proches réserve un voyage sur ce site, appelez <br /> immédiatement le <span>3114</span>, le numéro national de prévention du suicide.</p>
                    <ul>
                        <li>
                            <NavLink to="/destinations-finales">Destinations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/agence-tous-risques">Agence</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nous-contacter-vraiment">Contact</NavLink>
                        </li>
                    </ul>
                    <p className='copyright'>© The Last Travel 2022. Tous droits réservés.</p>
                </div>

            </div>
            <div className='cimetery'>
                <img src={'/assets/the-last-travel-icon-cimetery.svg'} alt="Cimetery illustration footer" />
            </div>
        </div>
    );
};

export default Footer;