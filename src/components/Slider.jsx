import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Banner1 from "./../images/banner_1.jpeg";
import Banner2 from "./../images/banner_2.jpeg";
import Banner3 from "./../images/banner_3.jpeg";




const Slider = () => {

    const [activeSlide, setActiveSlide] = useState("radio1");

    useEffect(() => {

        var counter = 1;
        setInterval(function () {
            setActiveSlide(`radio${counter}`);
            counter++;
            if (counter > 3) {
                counter = 1;
            }
        }, 5000);
    }, []);


    return (
        <section className="image-slider">
            <div className="content">
                <div className="slider">
                    <div className="slides">
                        <input
                            type="radio"
                            name="activeSlide"
                            id="radio1"
                            onChange={(slide) => setActiveSlide(slide.target.id)}
                            checked={activeSlide == "radio1"}
                        />
                        <input
                            type="radio"
                            name="activeSlide"
                            id="radio2"
                            onChange={(slide) => setActiveSlide(slide.target.id)}
                            checked={activeSlide == "radio2"}
                        />
                        <input
                            type="radio"
                            name="activeSlide"
                            id="radio3"
                            onChange={(slide) => setActiveSlide(slide.target.id)}
                            checked={activeSlide == "radio3"}
                        />
                        <div className="slide first">
                            <img src={Banner1} />
                        </div>

                        <div className="slide">
                            <img src={Banner2} />
                        </div>
                        <div className="slide">
                            <img src={Banner3} />
                        </div>
                        <div className="navigation-auto">
                            <div className="auto-btn1" />
                            <div className="auto-btn2" />
                            <div className="auto-btn3" />
                        </div>
                        <div className="navigation-manual">
                            <label htmlFor="radio1" className="manual-btn" />
                            <label htmlFor="radio2" className="manual-btn" />
                            <label htmlFor="radio3" className="manual-btn" />
                        </div>
                    </div>
                </div>
                <div className="text-box">
                    <h1 className="text-white">
                        Best quality work for your construction.
                    </h1>
                    <p>
                        We always take care of my customer's demand, what they need, what
                        they want.
                    </p>
                    <Link to="/contact" className="button">
                        CONTACT US
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Slider;
