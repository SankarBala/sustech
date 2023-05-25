import React from 'react';
import { Link } from 'react-router-dom';
import WorkImage from './../images/work.jpeg';

function Work() {
    return (
        <section className="work">
            <div className="content">
                <div className="column col-left p-2 revealLeft">
                    <img src={WorkImage} alt="working" />
                </div>
                <div className="column col-right px-4 revealRight">
                    <h4>WORK WITH OUR TEAMS</h4>
                    <p>


                    </p>
                    <ul>
                        <li><i className="fas fa-chevron-right" />Building Quality</li>
                        <li><i className="fas fa-chevron-right" />Honest Advisor</li>
                        <li><i className="fas fa-chevron-right" />24/week support</li>
                        <li><i className="fas fa-chevron-right" />Performances Team</li>
                        <li><i className="fas fa-chevron-right" />Work Solution</li>
                        <li><i className="fas fa-chevron-right" />Work and Deadline </li>
                    </ul>
                    <Link to="/contact" className="button">GET START</Link>
                </div>
            </div>
        </section>
    )
}

export default Work
