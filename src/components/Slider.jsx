import React from 'react'
import Banner from './../images/banner.jpeg';

function Slider() {
    return (
        <section className="image-slider">
            <div className="content">
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio" id="radio1" />
                        <input type="radio" name="radio" id="radio2" />
                        <input type="radio" name="radio" id="radio3" />
                        <input type="radio" name="radio" id="radio4" />
                        <div className="slide first">
                            {/* <img src={Banner} /> */}
                        </div>
                        <div className="slide">
                            <img src="images/2.jpg" />
                        </div>
                        <div className="slide">
                            <img src="images/3.jpg" />
                        </div>
                        <div className="slide">
                            <img src="images/4.jpg" />
                        </div>
                        <div className="navigation-auto">
                            <div className="auto-btn1" />
                            <div className="auto-btn2" />
                            <div className="auto-btn3" />
                            <div className="auto-btn4" />
                        </div>
                        <div className="navigation-manual">
                            <label htmlFor="radio1" className="manual-btn" />
                            <label htmlFor="radio2" className="manual-btn" />
                            <label htmlFor="radio3" className="manual-btn" />
                            <label htmlFor="radio4" className="manual-btn" />
                        </div>
                    </div>
                </div>
                <div className="text-box">
                    <h1>Best Quality Steel For Construction</h1>
                    <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut imperdiet eu, iaculis a sem.</p>
                    <a href="#" className="button">WORK WITH US</a>
                </div>
            </div>
        </section>
    )
}

export default Slider
