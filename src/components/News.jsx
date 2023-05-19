import React from 'react'

function News() {
    return (
        <section className="news">
            <div className="section-title">
                <h3>our latest news</h3>
                <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus. Phasellus
                    tellus tellus , imperdiet eu</p>
            </div>
            <div className="content">
                <div className="card revealLeft">
                    <div className="image"><img src="images/engineer-discuss.jpg" alt /></div>
                    <div className="info">
                        <span>7 March, 2021 <b style={{ color: 'red', fontSize: 21 }}>-</b> Comments (0)</span>
                        <h3>WE WORK HARD TO BUILD</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus.
                            Phasellus tellus tellus , imperdiet eu</p>
                        <a href="#">Read More</a><i className="fas fa-arrow-right" style={{ marginLeft: 8, color: 'red', fontSize: 12, marginTop: 4 }} />
                    </div>
                </div>
                <div className="card reveal">
                    <div className="image"><img src="images/ontime-project.jpg" alt /></div>
                    <div className="info">
                        <span>7 March, 2021 <b style={{ color: 'red', fontSize: 21 }}>-</b> Comments (0)</span>
                        <h3>PROJECT WILL BE ON TIME</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus.
                            Phasellus tellus tellus , imperdiet eu</p>
                        <a href="#">Read More</a><i className="fas fa-arrow-right" style={{ marginLeft: 8, color: 'red', fontSize: 12, marginTop: 4 }} />
                    </div>
                </div>
                <div className="card revealRight">
                    <div className="image"><img src="images/best-project.jpg" alt /></div>
                    <div className="info">
                        <span>7 March, 2021 <b style={{ color: 'red', fontSize: 21 }}>-</b> Comments (0)</span>
                        <h3>OUR BEST PROJECT</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus.
                            Phasellus tellus tellus , imperdiet eu</p>
                        <a href="#">Read More</a><i className="fas fa-arrow-right" style={{ marginLeft: 8, color: 'red', fontSize: 12, marginTop: 4 }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
