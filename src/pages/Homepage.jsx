import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import image1 from '../../public/assets/the-last-travel-image-agbogloshie.jpg';
import image2 from '../../assets/the-last-travel-image-aokigahara.jpg';
import image3 from '../../assets/the-last-travel-image-dzerzhinsk.jpg';
import image4 from '../../assets/the-last-travel-image-hotan.jpg';
import image5 from '../../assets/the-last-travel-image-iakoutsk.jpg';
import image6 from '../../assets/the-last-travel-image-lac-natron.jpg';
import image7 from '../../assets/the-last-travel-image-porte-de-l-enfer.jpg';
import image8 from '../../assets/the-last-travel-image-queimada-grande.jpg';
import image9 from '../../assets/the-last-travel-image-san-pedro-sula.jpg';
import image10 from '../../assets/the-last-travel-image-triangle-des-bermudes.jpg';
import Testimony from '../components/Testimony';
import "../style/HomePage.css";
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const Homepage = () => {
    return (

        <div>
            <Header />
            <Carousel className='carousel'>
                <img src={image1} alt="test1" className="img1" />
                <img src={image2} alt="test2" className="img2" />
                <img src={image3} alt="test3" className="img3" />
                <img src={image4} alt="test4" className="img4" />
                <img src={image5} alt="test5" className="img5" />
                <img src={image6} alt="test6" className="img6" />
                <img src={image7} alt="test7" className="img7" />
                <img src={image8} alt="test8" className="img8" />
                <img src={image9} alt="test9" className="img9" />
                <img src={image10} alt="test10" className="img10" />
            </Carousel>
            <div>
                <Testimony />
            </div>
            <Footer />
        </div>
    );

};


export default Homepage;