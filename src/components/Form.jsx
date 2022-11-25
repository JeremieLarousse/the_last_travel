import React, { useState } from 'react';
import style from '../style/Contact.css';
import PopIn from '../components/PopIn';

const Form = () => {
    const [openPop, setOpenPop] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        setName.current.value = "";
    }

    return (
        <div className="formulaire">
            <div className="left-part">
                <h2>Contactez-nous</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="left-part">
                        <label htmlFor="name">Votre nom</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name" 
                            />
                        <label htmlFor="email">Votre adresse email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text" 
                                id="name" 
                            />
                            <label htmlFor="text">Votre demande</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button onClick={() => setOpenPop(true)} type="submit" value="Envoyer">Envoyer</button>
                    </div>
                </form>
            </div>

            <div className="right-part">
                <img src="https://images.unsplash.com/photo-1605446994677-9b99e0d6647f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80" alt="Man near to a cliff" />
            </div>
            <PopIn 
                open={openPop} 
                onClose={() => {
                    setOpenPop(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                }} 
            />
        </div>
    );
};

export default Form;