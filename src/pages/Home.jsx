import React from 'react';
import Header from './../components/Header.jsx';
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
import Footer from './../components/Footer.jsx';

function Home() {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}

export default Home;
