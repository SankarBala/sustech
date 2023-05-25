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
                        <h5>ELECTRO MECHANICAL EQUIPMENT</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/service">All Services</Link>
                    </div>
                </div>
                <div className="card card-second reveal">
                    <div className="service-icon">
                        <i className="fas fa-building" />
                    </div>
                    <div className="service-info">
                        <h5>BUILDING CONSTRUCTION & MAINTAIN</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/service">All Services</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-sleigh" />
                    </div>
                    <div className="service-info">
                        <h5>PLUMBING & SANITARY SERVICES</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/service">All Services</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h5>CARPENTRY & FLOORING SERVICES</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/service">All Services</Link>
                    </div>
                </div>


                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h5>FLOOR AND WALL TILING</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/service">All Services</Link>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h5>PAINTING CONTRACTING</h5>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <Link to="/service">All Services</Link>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Services
