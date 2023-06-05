import React from 'react'
import { Link } from 'react-router-dom'


function Services() {
    return (
        <section className="services">
            <div className="content ">

                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-charging-station" />
                    </div>
                    <div className="service-info">
                        <h5>AC DUCTING FIXING AND MAINTENANCE</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/contact">Book Now</Link>
                    </div>
                </div>
                <div className="card card-second reveal">
                    <div className="service-icon">
                        <i className="fas fa-sleigh" />
                    </div>
                    <div className="service-info">
                        <h5>PLUMBING & SANITARY SERVICES</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/contact">Book Now</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h5>CARPENTRY & FLOORING SERVICES</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/contact">Book Now</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h5>PAINTING CONTRACTING</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/contact">Book Now</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-sleigh" />
                    </div>
                    <div className="service-info">
                        <h5>BUILDING CLEANING SERVICES.</h5>
                        <p>
                            Mauris mattis auctor cursus. Phasellus tellus tellus
                            ,imperdiet ut
                        </p>
                        <Link to="/contact">Book Now</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h5>
                            AIR-CONDITIONING & VENTILATIONS
                        </h5>
                        <p>
                            Mauris mattis auctor cursus. Phasellus tellus tellus
                            ,imperdiet ut
                        </p>
                        <Link to="/contact">Book Now</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center pt-5">
            <Link class="all-service-button" to="/service">View All Services</Link>
            </div>
        </section>
    )
}

export default Services
