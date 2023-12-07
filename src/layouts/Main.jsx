import Contact from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer";
import Home from "../pages/Home/Home";
import NavBar from "../pages/Navbar/Navbar";
import Project from "../pages/Project/Project";
import Team from "../pages/Team/Team";

const Main = () => {
  return (
    <div className="font-inter ">
      <NavBar></NavBar>
      <Home></Home>
      <Project />
      <Team/>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Main;
