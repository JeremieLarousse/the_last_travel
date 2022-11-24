/* import { useState, useEffect } from "react"; */

import { Link } from "react-router-dom";
import "../style/Carousel.css";

function CarouselDesktop() {
    /* const [images, setImages] = useState([]);
    const callApi = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cheese`).then((res) => {
            const calledImages = [];
            res.data
                .filter((element) => element.fromageImage.includes("lorho"))
                .map((element) => {
                    return calledImages.push(element.fromageImage);
                });
            setImages(calledImages.slice(7, 13));
        });
    };

    useEffect(() => {
        callApi();
    }, []); */

    return (
        <div className="carouselDesktop">
            <div className="contenu-carousel">
                <div className="images-carousel">
                    <Link to="/Fromages">
                        {/* {images.map((image) => (
                            <div
                                key={image}
                                className="carouselImg"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            />
                        ))} */}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CarouselDesktop;