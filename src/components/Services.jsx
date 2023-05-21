import React from 'react'

function Services() {
    return (
        <section className="services">
            <div className="content ">

                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-charging-station" />
                    </div>
                    <div className="service-info">
                        <h4>ELECTROMECHANICAL EQUIPMENT</h4>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="card card-second reveal">
                    <div className="service-icon">
                        <i className="fas fa-building" />
                    </div>
                    <div className="service-info">
                        <h4>BUILDING CONSTRUCTION & MAINTAIN</h4>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-sleigh" />
                    </div>
                    <div className="service-info">
                        <h4>PLUMBING & SANITARY SERVICES</h4>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="service-icon">
                        <i className="fas fa-person-booth" />
                    </div>
                    <div className="service-info">
                        <h4>CARPENTRY & FLOORING SERVICES</h4>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus ,imperdiet ut</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
