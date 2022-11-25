import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Form from "../components/Form";


const Contact = () => {
    return (
    <div>
       <Header />
          <div className="contact">
              <Form />
          </div>
        <Footer />
       </div>
    );
};

export default Contact;