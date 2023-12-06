import Footer from "../pages/Footer/Footer";
import Home from "../pages/Home/Home";
import NavBar from "../pages/Navbar/Navbar";
import Project from "../pages/Project/Project";

const Main = () => {
  return (
    <div className="font-inter">
      <NavBar></NavBar>
      <Home></Home>
      <Project />
      <Footer></Footer>
    </div>
  );
};

export default Main;
