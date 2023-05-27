import React from 'react';
import { Link } from 'react-router-dom';
import WorkImage from './../images/work.jpeg';

function Work() {
    return (
        <section className="work">
            <div className="content">
                <div className=" col-left p-2 revealLeft">
                    <img src={WorkImage} alt="working" />
                </div>
                <div className="col-right px-4 ">
                    <h4>WORK WITH OUR TEAMS</h4>
                    <div className="row">

                        <div className="col-12">
                            <ul>
                                <li><i className="fas fa-chevron-right" />Building Quality</li>
                                <li><i className="fas fa-chevron-right" />Honest Advisor</li>
                                <li><i className="fas fa-chevron-right" />24/week support</li>
                                <li><i className="fas fa-chevron-right" />Performances Team</li>
                                <li><i className="fas fa-chevron-right" />Work Solution</li>
                                <li><i className="fas fa-chevron-right" />Work and Deadline </li>
                            </ul>
                        </div>
                        <div className="col-12 mt-3">
                            <Link to="/contact" className="button">GET START</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
