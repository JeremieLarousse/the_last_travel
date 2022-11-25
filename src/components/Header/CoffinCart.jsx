import React from 'react';
import "../../style/CoffinCart.css";
import PropTypes from "prop-types";

const CoffinCart = ({ onClose }) => {

    return (
        <div className='coffinCartSection'>

            <div className="coffinCartCard">
                <h2>Oups!</h2>
                <p>
                    Vous n'avez rien dans votre cerceuil...<br />
                    Êtes-vous <span>sûr </span>d'avoir réservé un voyage ?
                </p>
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    );
};

export default CoffinCart;

CoffinCart.propTypes = {
    onClose: PropTypes.func.isRequired,
};