import React from 'react';
import '../style/Contact.css';
import Lottie from 'react-lottie';

import animationData from '../components/assets/lottie/heart-beat.json';


const PopIn = ({ open, onClose }) => {
    if (!open) return null;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">
                <img src="https://images.unsplash.com/photo-1448772917253-74bbbe249b30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hell Hole in Turkmenistan" />
                <p onClick={onClose} className="closeBtn">X</p>
                <div className="modalRight">
                    <div className="content">
                        <h3>Merci pour l'étrange confiance que vous nous accordez !</h3>
                        <h4>Nous vous répondrons dans les plus brefs délais.</h4>
                    </div>
                    <div className="btnContainer">
                        {/* <button className="btnPrimary">
                            <span className="bold">OUI</span>
                        </button> */}
                        <Lottie
                            options={defaultOptions}
                            height={180}
                            width={180}
                        />
                        {/* <button className="btnOutline">
                            <span className="bold">NON</span>
                        </button> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopIn;