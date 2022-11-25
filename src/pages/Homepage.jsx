import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import Testimony from '../components/Testimony';
import "../style/HomePage.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const Homepage = () => {
    return (

        <div>
          <Header />
            <Carousel className='carousel'>
                <img src={'/assets/the-last-travel-image-agbogloshie.jpg'} alt="test1" className="img1" />
                <img src={'/assets/the-last-travel-image-aokigahara.jpg'} alt="test2" className="img2" />
                <img src={'/assets/the-last-travel-image-dzerzhinsk.jpg'} alt="test3" className="img3" />
                <img src={'/assets/the-last-travel-image-hotan.jpg'} alt="test4" className="img4" />
                <img src={'/assets/the-last-travel-image-iakoutsk.jpg'} alt="test5" className="img5" />
                <img src={'/assets/the-last-travel-image-lac-natron.jpg'} alt="test6" className="img6" />
                <img src={'/assets/the-last-travel-image-porte-de-l-enfer.jpg'} alt="test7" className="img7" />
                <img src={'/assets/the-last-travel-image-queimada-grande.jpg'} alt="test8" className="img8" />
                <img src={'/assets/the-last-travel-image-san-pedro-sula.jpg'} alt="test9" className="img9" />
                <img src={'/assets/the-last-travel-image-triangle-des-bermudes.jpg'} alt="test10" className="img10" />
            </Carousel>
            <div>
                <Testimony />
            </div>
          <Footer />
      </div>
);
};

export default Homepage;
