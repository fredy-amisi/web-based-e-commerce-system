import React, { useEffect, useRef, useState } from "react";
import s30 from "../Images/s30.jpeg"; // Update with an appropriate image for the agricultural theme
import Scrollbutton from "../Components/Scrollbutton";
import ScrollAnimation from "../Components/ScrollAnimation ";
import '../Css/ScrollAnimation.css';
import "../Css/styling.css";

const About = () => {
    const { ref, isVisible } = ScrollAnimation();

    return (
        <div className="about">
            <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
                <div className="vertical-about"></div>
                <h3>About<span> Our Agricultural E-Commerce System</span></h3>
            </div>
            <div className="all-containers">
                <div className="about-container1">
                    <img className="a-image" src={s30} alt="Agricultural E-Commerce" />
                </div>
                <div className="about-container2">
                    <h4>Welcome to <span>Our Agricultural E-Commerce System</span>: </h4>
                </div>
            </div>
            <div className="about-container3">
                <p><span>At our platform, we bridge the gap between farmers and markets
                    with our comprehensive e-commerce solution. Our system offers a
                    seamless experience for buying and selling agricultural products,
                    accessing valuable resources, and connecting with agricultural experts.
                    Empowering farmers and enhancing the agricultural industry with technology.</span></p>
            </div>
            <Scrollbutton />
        </div>
    );
}

export default About;
