import React from 'react';
import "../style/reservation.css";
import destination from "../data"


const Reservation = () => {
    console.log(destination[0].name)
    console.log(destination[0].image)
    console.log(destination[0].description)
    return (
        <div className='background'>
            <div className='popin'>
                <div className='imgContainer'>
                    <img src={destination[0].image} className="imgCard" />
                </div>
                <div className='info'>
                    <h3>{destination[0].name}</h3>
                    <p>{destination[0].lethal}</p>

                    <form className='firstForm'>
                        <div className='name'>
                            <input type="text" name="fristname" placeholder='John' />
                            <input type="text" name='lastname' placeholder='Smith' />

                        </div>
                        <input type="date" name="birthday" placeholder='17/06/1986' />
                        <input type="number" name="weight" placeholder='86kg' />
                        <select>
                            <option value="">Genre</option>
                            <option>Agenre</option>
                            <option value="">Abrosexuel<span>+33$</span></option>
                            <option value="">Agenre</option>
                            <option value="">Allié·e hétérosexuel·e</option>
                            <option value="">Allosexuel </option>
                            <option value="">Androgyne</option>
                            <option value=""> Aphobie</option>
                            <option value="">Apogenre</option>
                            <option value="">Aporagenre </option>
                            <option value="">Aroace</option>
                            <option value="">Aromantique </option>
                            <option value="">Asexuel </option>
                            <option value="">Auto-identifié</option>
                            <option value="">Bear</option>
                            <option value="">Bicurieux </option>
                            <option value="">Binaire </option>
                            <option value="">Biphobie</option>
                            <option value="">Bisexuel </option>
                            <option value="">Bispirituel </option>
                            <option value="">Cétérosexualité </option>
                            <option value="">Cisgenre</option>
                            <option value="">Cuir</option>
                            <option value="">Demifille</option>
                            <option value="">Demigarçon</option>
                            <option value="">Demi-non-binaire</option>
                            <option value="">Demiromantique </option>
                            <option value="">Demisexuel</option>
                            <option value="">Détransition </option>
                            <option value="">Dysphorasexuel</option>
                            <option value="">Dysphorie de genre</option>
                            <option value="">Famille homoparentale </option>
                            <option value="">Feederism</option>
                            <option value="">Fluide</option>
                            <option value="">Gai</option>
                            <option value="">Genderfluid </option>
                            <option value="">Genderqueer </option>
                            <option value="">Genre neutre </option>
                            <option value="">Graysexuel </option>

                        </select>
                        <label htmlFor="more">More option
                            <input type="checkbox" name="more" id="more" placeholder='test' />
                        </label>


                        {/* {state &&  */}
                        <select name="wood" id="">
                            <option value="">essence de bois</option>
                            <option value="">acajou</option>
                            <option value="">chêne</option>
                            <option value="">ébène</option>
                            <option value="">érable</option>
                            <option value="">pin</option>
                        </select>
                        <textarea name='épitaphe' placeholder='Laissez tomber les fleurs. Apportez-moi plutôt une bière' />
                        {/* } */}

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Reservation;