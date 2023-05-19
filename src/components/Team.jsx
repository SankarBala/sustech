import React from 'react'

function Team() {
    return (
        <section className="team-intro">
            <div className="section-title">
                <h3>MEET OUR TEAM</h3>
                <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus. Phasellus
                    tellus tellus , imperdiet eu</p>
            </div>
            <div className="content">
                <div className="card reveal">
                    <div className="image">
                        <img src="images/pexels-andrea-piacquadio-3760613.jpg" alt />
                        <div className="icon">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                        </div>
                    </div>
                    <div className="info">
                        <h2>JOHN WELSON</h2>
                        <span>Architecture Engineer</span>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image">
                        <img src="images/pexels-andrea-piacquadio-3772616.jpg" alt />
                        <div className="icon">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                        </div>
                    </div>
                    <div className="info">
                        <h2>JAME SON</h2>
                        <span>Civil Engineer</span>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image">
                        <img src="images/4TH-IMG.jpg" alt />
                        <div className="icon">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                        </div>
                    </div>
                    <div className="info">
                        <h2>ALINA DOE</h2>
                        <span>Project Manager</span>
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image">
                        <img src="images/pexels-andrea-piacquadio-3760532.jpg" alt />
                        <div className="icon">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                        </div>
                    </div>
                    <div className="info">
                        <h2>TOM HARRY</h2>
                        <span>Architecture Engineer</span>
                    </div>
                </div>
            </div>
            <div className="btn" style={{ display: 'flex', width: '100%', justifyContent: 'center' }}> <a href="#" className="button" style={{ marginTop: 50 }}>JOIN OUR TEAM</a> </div>
        </section>
    )
}

export default Team
