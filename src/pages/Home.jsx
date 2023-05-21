import React from 'react';
import Slider from './../components/Slider.jsx';
import Services from './../components/Services.jsx';
import Work from './../components/Work.jsx';
import Projects from './../components/Projects.jsx';
import Blog from './../components/Blog.jsx';
import Price from './../components/Price.jsx';
import Idea from './../components/Idea.jsx';
import Team from './../components/Team.jsx';
import Project from './../components/Project.jsx';
import News from './../components/News.jsx';

function Home() {
    return (
        <>
            <Slider />
            <Services />
            <Work />
            <Projects />
            <Blog />
            {/* <Price /> */}
            {/* <Idea /> */}
            {/* <Team /> */}
            {/* <Project /> */}
            {/* <News /> */}
        </>
    );
}

export default Home;
