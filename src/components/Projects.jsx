import React from 'react'

function Projects() {
    return (
        <section className="projects">
            <div className="content reveal">
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-users-cog" />
                    </div>
                    <div className="info">
                        <h3>1200</h3>
                        <span>HAPINESS CUSTOMERS</span>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-file-signature" />
                    </div>
                    <div className="info">
                        <h3>2080</h3>
                        <span>PROJECTS COMPLETED </span>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-code-branch" />
                    </div>
                    <div className="info">
                        <h3>4000</h3>
                        <span>WORLD BRANCHES</span>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-medal" />
                    </div>
                    <div className="info">
                        <h3>100</h3>
                        <span>SPECIAL WINNER</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
