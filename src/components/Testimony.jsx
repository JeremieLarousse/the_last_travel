import React from 'react';

const Testimony = () => {

    return (

        <div>

            <div className="Testimonial">

                <div className="Testimonial1">

                    <img src={'/assets/blessure-femme.jpg'} alt="hurt1" className="hurt1" />

                    <p>"Des moments intenses, peut-être trop ?, mais inoubliables.<br /> Je recommande surtout la porte de l'enfer, ils sont bouillants là-bas.<br /> Merci Last Travel"<br /><h3>Jessica Stoalebra.</h3></p>




                </div>

                <div className='Testimonial2'>

                    <img src={'/assets/blessure_homme.jpg'} alt="hurt2" className="hurt2" />

                    <p>"Une expérience hors du commun, c'est rien de le dire !, à refaire malgré la chance d'être revenue entier, ou presque.<br /> Je vous recommande particulièrement le lac Natron qui ne vous laissera pas de marbre. <br />Vive Last Travel !"<br /><h3>Sacha Touilles</h3></p>



                </div>

                <div className="Testimonial3">

                    <img src={'/assets/urne.jpg'} alt="hurt3" className="hurt3" />

                    <p>"Notre frère a adoré son périple autour du triangle des Bermudes, en tout cas d'après les derniers selfies qu'il nous a envoyé. Il avait l'air de baigner dans le bonheur.<br /> Nous pensons qu'il recommanderait sincèrement ce voyage.<br /> Merci Last Travel ? "<br /><h3>La Famille de Michel Alavicourt</h3></p>



                </div>

            </div>

        </div>
    );
};

export default Testimony;