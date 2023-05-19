import React from 'react'

function Project() {
    return (
        <section className="project">
            <div className="section-title">
                <h3>our best projects</h3>
                <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus. Phasellus
                    tellus tellus , imperdiet eu</p>
            </div>
            <div className="content">
                <div className="card reveal">
                    <div className="image"><img src="images/pexels-thisisengineering-3862384.jpg" alt /></div>
                    <div className="info">
                        <span>CONSTRUCTION</span>
                        <h3>DISCUSSION TO MAKE A BETTER PROJECT PLAN</h3>
                        <a href="#">Learn More<i className="fas fa-arrow-right" style={{ marginLeft: 8, color: '#fff', fontSize: 12, marginTop: 4 }} /></a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image"><img src="images/interior-design.jpg" alt /></div>
                    <div className="info">
                        <span>Repair</span>
                        <h3>DESIGN YOUR INTERIOR HOUSE ONLINE FREE</h3>
                        <a href="#">Learn More<i className="fas fa-arrow-right" style={{ marginLeft: 8, color: '#fff', fontSize: 12, marginTop: 4 }} /></a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image"><img src="images/construction.jpg" alt /></div>
                    <div className="info">
                        <span>Hospital</span>
                        <h3>WE USE QUALITY MATERIAL TO BUILD FOR YOU</h3>
                        <a href="#">Learn More<i className="fas fa-arrow-right" style={{ marginLeft: 8, color: '#fff', fontSize: 12, marginTop: 4 }} /></a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image"><img src="images/university.jpg" alt /></div>
                    <div className="info">
                        <span>University</span>
                        <h3>YOUR PROJECT WILL BE CLEAN AND BEST QUALITY</h3>
                        <a href="#">Learn More<i className="fas fa-arrow-right" style={{ marginLeft: 8, color: '#fff', fontSize: 12, marginTop: 4 }} /></a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image"><img src="images/house.jpg" alt /></div>
                    <div className="info">
                        <span>House</span>
                        <h3>MASTER PLAN OF PROJECTS IN YOUR CITY</h3>
                        <a href="#">Learn More<i className="fas fa-arrow-right" style={{ marginLeft: 8, color: '#fff', fontSize: 12, marginTop: 4 }} /></a>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image"><img src="images/INTERIOR-2.jpg" alt /></div>
                    <div className="info">
                        <span>INTERIOR</span>
                        <h3>ARCHITECTURE AND ENGINEER ARE TOGETHER</h3>
                        <a href="#">Learn More<i className="fas fa-arrow-right" style={{ marginLeft: 8, color: '#fff', fontSize: 12, marginTop: 4 }} /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
