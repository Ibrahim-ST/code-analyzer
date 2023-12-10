import React from 'react';
import NavBar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Project from '../Project/Project';
import Team from '../Team/Team';
import RisingStars from '../RisingStars/RisingStars';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
      <div className="font-inter ">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Project />
        <Team/>
        <RisingStars />
        <Footer></Footer>
      </div>
    );
};

export default Home;