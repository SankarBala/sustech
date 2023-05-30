import React from 'react';
import Sabuj from './../images/sabuj.png';
import Shif from './../images/shif.png';

function About() {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text_center mb-55">
                            <div className="section_main_title py-1 mb-3">
                                <h1 className="text-center text-primary">About US</h1>
                                <hr />
                            </div>
                            <div className="em_bar">
                                <div className="em_bar_bg" />
                            </div>
                        </div>
                    </div>
                </div>


                <section className="partner">

                    <div className="text_center">
                        <div className="py-1">
                            <h1 className="text-center text-danger">Partners</h1>
                        </div>
                        <div className="em_bar">
                            <div className="em_bar_bg" />
                        </div>
                    </div>


                    <div className="content ">
                        <div className="card">
                            <div className="partner-image">
                                <img src={Sabuj} alt="sabuj" />
                            </div>
                            <div className="partner-info">
                                <h3>MD SOBUJ</h3>
                                <p>Director</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="partner-image">
                                <img src={Shif} alt="sabuj" />
                            </div>
                            <div className="partner-info">
                                <h3>MD SHIF UDDIN MAMUN</h3>
                                <p>Managing Director</p>
                            </div>
                        </div>
                    </div>
                </section>

                <p className="p-3 text-md text-justify">
                    Welcome to <span className="text-blue">MOHAMMED SHIF UDDIN & SOBUJ TECHNICAL SERVICES</span>, your trusted partner for all your construction needs.

                    At <span className="text-blue">MOHAMMED SHIF UDDIN & SOBUJ TECHNICAL SERVICES</span>, we take pride in our expertise and commitment to delivering high-quality construction solutions. With years of experience in the industry, we have established ourselves as a leading construction company dedicated to excellence and customer satisfaction.

                    Our skilled team of professionals is equipped to handle projects of all sizes and complexities. From residential homes to commercial buildings and infrastructure projects, we have the knowledge and resources to bring your vision to life. We work closely with our clients, architects, and engineers to ensure that every project is executed with precision and attention to detail.

                    What sets us apart is our unwavering commitment to quality craftsmanship. We believe that every structure should be built to withstand the test of time, while also meeting the functional and aesthetic requirements of our clients. Our construction methods and materials are of the highest standards, ensuring durability, safety, and sustainability.

                    At <span className="text-blue">MOHAMMED SHIF UDDIN & SOBUJ TECHNICAL SERVICES</span>, we understand that each project is unique, and we tailor our services to meet your specific needs. Whether you require new construction, renovations, or maintenance services, we approach every job with the same level of dedication and professionalism.

                    We prioritize communication and transparency throughout the construction process. Our team keeps you informed every step of the way, providing regular updates on progress, timelines, and any changes that may arise. We value your input and actively seek your feedback to ensure that your vision is realized.

                    Safety is paramount in our operations. We adhere to strict safety protocols and regulations to create a secure working environment for our team and all stakeholders involved. Our commitment to safety extends beyond our own personnel to encompass the surrounding community and environment.

                    As a responsible construction company, we strive to minimize our environmental impact. We incorporate sustainable practices into our projects, such as utilizing eco-friendly materials, implementing energy-efficient designs, and promoting recycling and waste management.

                    Customer satisfaction is at the core of our business philosophy. We measure our success by the smiles on our clients' faces and the long-lasting relationships we build. We aim to exceed your expectations, delivering projects on time, within budget, and to the highest standards.

                    Whether you have a residential dream home, a commercial development, or an infrastructure project in mind, trust <span className="text-blue">MOHAMMED SHIF UDDIN & SOBUJ TECHNICAL SERVICES</span> to be your reliable partner. Contact us today to discuss your construction needs and let us bring your vision to reality.
                </p>
            </div>


        </div>
    )
}

export default About
