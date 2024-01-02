import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Project from "../Project/Project";
import Team from "../Team/Team";
import RisingStars from "../RisingStars/RisingStars";
import Testimonial from "../Testimonial/Testimonial";
import NavBar from "../NavBar/NavBar";
import Stats from "../Stats/Stats";
import Brand from "../Brands/Brands";
import ServicesPage from "../../ServicesPage/ServicesPage";

const Home = () => {
  return (
    <div className="font-inter ">
      <NavBar />
      <Banner />
      <About />
      <ServicesPage />
      <Project />
      <Stats />
      <Team />
      <RisingStars />
      <Testimonial />
      <Brand />
    </div>
  );
};

export default Home;
