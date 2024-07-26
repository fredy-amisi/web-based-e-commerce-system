import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../Css/styling.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import About from "../Pages/About";

const Index = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleSignupClick = () => {
        navigate('/Signup');
    }
    const slides = [
        {
            id: 1,
            WelcomeText: 'Welcome to FreshHarvest Marketplace',
            heading1: 'Discover the Best of Farm-Fresh Products: ',
            heading2: 'From the Farm to Your Table',
            description1: 'Enjoy guaranteed freshness and quality ',
            description2: 'Support local farmers and sustainable practices.',

        },

        {
            id: 2,
            WelcomeText: 'FreshHarvest Marketplace',
            heading1: 'Your Trusted Source for Farm-Fresh Goodness: ',
            heading2: 'Why Choose FreshHarvest?',
            description1: 'Wide Variety: From seasonal fruits to farm-raised hens.',
            description2: 'Top Quality: Only the freshest, highest-quality products.',

        }
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds

    };

    return (
        <div id="root">
            <section className="banner_main">
                <Slider className="custom-slider" {...settings}>
                    {slides.map((slide) => (
                        <div key={slide.id} className={`carousel-item${slide.id}`}>
                            
                            <div className="slide-content">
                                <div className="welcome">
                                    <h4>{slide.WelcomeText}</h4>
                                </div>
                                <h2>{slide.heading1}</h2>
                                <h2>{slide.heading2}</h2>

                                <p>{slide.description1}</p>
                                <p>{slide.description2}</p>

                                <div className="gl-buttons">
                                    <Button className="g-button" variant="primary" onClick={handleSignupClick}>
                                        <span>Get Started</span>
                                    </Button>
                                    <Button className="l-button" variant="primary" onClick={handleLoginClick}>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
           <About/>

        </div>

    )
}
export default Index;