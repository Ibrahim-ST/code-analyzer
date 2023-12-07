import Footer from "../pages/Footer/Footer";
import Home from "../pages/Home/Home";
import NavBar from "../pages/Navbar/Navbar";
import Project from "../pages/Project/Project";
import RisingStars from "../pages/RisingStars/RisingStars";
import Team from "../pages/Team/Team";

const Main = () => {
  return (
    <div className="font-inter">
      <NavBar></NavBar>
      <Home></Home>
      <Project />
      <Team />
      <RisingStars/>
      <Footer></Footer>
    </div>
  );
};

export default Main;
