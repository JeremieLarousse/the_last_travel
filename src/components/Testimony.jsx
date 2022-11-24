import React from 'react';
import image11 from "../assets/blessure-femme.jpg";
import image12 from "../assets/blessure_homme.jpg";
import image13 from "../assets/urne.jpg";

const Testimony = () => {

    return (

        <div>

            <div className="Testimonial">

                <div className="Testimonial1">

                    <img src={image11} alt="hurt1" className="hurt1" />

                    <p>"Des moments intences, peut-être trop ?, mais inoubliables.<br /> Je recommande surtout la porte de l'enfer, ils sont bouillants là-bas.<br /> Merci Last Travel"</p>

                    <h3>Jessica Stoalebra.</h3>

                </div>

                <div className='Testimonial2'>

                    <img src={image12} alt="hurt2" className="hurt2" />

                    <p>Une expérience hors du commun, c'est rien de le dire !, à refaire malgré la chance d'être revenue entier, ou presque.<br /> Je vous recommande particulièrement le lac Natron qui ne vous laissera pas de marbre <br />Vive Last Travel !"</p>

                    <h3>Sacha Touilles.</h3>

                </div>

                <div className="Testimonial3">

                    <img src={image13} alt="hurt3" className="hurt3" />

                    <p>Notre frère a adoré son périple autour du triangle des Bermudes, en tout cas d'après les derniers selfies qu'il nous a envoyé. Il avait l'air de baigner dans le bonheur.<br /> Nous pensons qu'il recommanderait sincèrement ce voyage.<br /> Merci Last Travel ? </p>

                    <h3>La Famille de Michel Alavicourt</h3>

                </div>

            </div>

        </div>
    );
};

export default Testimony;