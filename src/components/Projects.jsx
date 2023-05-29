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
                        <h3>50</h3>
                        <span>HAPINESS CUSTOMERS</span>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-file-signature" />
                    </div>
                    <div className="info">
                        <h3>80</h3>
                        <span>PROJECTS COMPLETED </span>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-code-branch" />
                    </div>
                    <div className="info">
                        <h3>DUBAI</h3>
                        <span>SERVICE PROVIDE</span>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <i className="fas fa-medal" />
                    </div>
                    <div className="info">
                        <h3>30</h3>
                        <span>SPECIAL WINNER</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
