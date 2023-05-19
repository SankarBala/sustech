import React from 'react'

function Blog() {
    return (
        <section className="blog">
            <div className="section-title">
                <h3>More From us</h3>
                <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus. Phasellus
                    tellus tellus , imperdiet eu</p>
            </div>
            <div className="content">
                <div className="card revealLeft">
                    <div className="card-img"><img src="images/cons.jpg" alt /></div>
                    <div className="card-info">
                        <h3>CONSTRUCTION TEAM</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursu</p>
                    </div>
                </div>
                <div className="card revealLeft">
                    <div className="card-img"><img src="images/pexels-thisisengineering-3862135.jpg" alt /></div>
                    <div className="card-info">
                        <h3>PROJECT DEADLINE</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursu</p>
                    </div>
                </div>
                <div className="card revealRight">
                    <div className="card-img"><img src="images/pexels-photomix-company-224924.jpg" alt /></div>
                    <div className="card-info">
                        <h3>CONSTRUCTION ACTIVITY</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursu</p>
                    </div>
                </div>
                <div className="card revealRight">
                    <div className="card-img"><img src="images/pexels-john-lee-6146768.jpg" alt /></div>
                    <div className="card-info">
                        <h3>OUR BEST PROJECTS</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursu</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
