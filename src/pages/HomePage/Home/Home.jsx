import React from 'react'; 
import Banner from '../Banner/Banner';
import About from '../About/About';
import Project from '../Project/Project';
import Team from '../Team/Team';
import RisingStars from '../RisingStars/RisingStars';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import NavBar from '../NavBar/NavBar';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
      <div className="font-inter ">
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <Project />
        <Stats></Stats>
        <Team/>
        <RisingStars />
        <Testimonial /> 
      </div>
    );
};

export default Home;