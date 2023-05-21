import React from "react";
import ProjectPic_1 from "./../images/project.jpeg";
import ProjectPic_2 from "./../images/project_2.jpg";
import ProjectPic_3 from "./../images/project_3.jpg";
import ProjectPic_4 from "./../images/project_4.jpg";

function Blog() {
  return (
    <section className="blog">
      <div className="section-title">
        <h3>Projects</h3>
        <p>
          We always handoverd project finishing before deadline.
        </p>
      </div>
      <div className="content">
        <div className="card revealLeft">
          <div className="card-img">
            <img src={ProjectPic_1} />
          </div>
          <div className="card-info">
            <h3>CONSTRUCTION TEAM</h3>
            <p>
              Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet
              ut.Mauris mattis auctor cursu
            </p>
          </div>
        </div>
        <div className="card revealLeft">
          <div className="card-img">
            <img src={ProjectPic_2} />
          </div>
          <div className="card-info">
            <h3>PROJECT DEADLINE</h3>
            <p>
              Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet
              ut.Mauris mattis auctor cursu
            </p>
          </div>
        </div>
        <div className="card revealRight">
          <div className="card-img">
            <img src={ProjectPic_3} />
          </div>
          <div className="card-info">
            <h3>CONSTRUCTION ACTIVITY</h3>
            <p>
              Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet
              ut.Mauris mattis auctor cursu
            </p>
          </div>
        </div>
        <div className="card revealRight">
          <div className="card-img">
            <img src={ProjectPic_4} />
          </div>
          <div className="card-info">
            <h3>OUR BEST PROJECTS</h3>
            <p>
              Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet
              ut.Mauris mattis auctor cursu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
