import React from 'react'

function Idea() {
    return (
        <section className="latest-idea">
            <div className="content">
                <div className="col-left">
                    <img src="images/pexels-yury-kim-585418.jpg" alt />
                </div>
                <div className="col-right">
                    <h2>CHECK OUT OUR LATEST IDEA</h2>
                    <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus.
                        Phasellus tellus tellus , imperdiet eu</p>
                    <ul>
                        <li><i className="fas fa-swimming-pool" />
                            <h3>BEST SUPPORT</h3><span>Best Service For Customer</span>
                        </li>
                        <li><i className="fas fa-clock" />
                            <h3>WORK ON TIME</h3><span>Best Service For Customer</span>
                        </li>
                        <li><i className="fas fa-certificate" />
                            <h3>CERTIFIED QUALITY</h3><span>Best Service For Customer</span>
                        </li>
                        <li><i className="fab fa-bandcamp" />
                            <h3>BEST BRANDING</h3><span>Best Service For Customer</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Idea
