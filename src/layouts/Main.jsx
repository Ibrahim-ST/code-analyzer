import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import NavBar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";

const Main = () => {
  return (
    <>
      <NavBar> </NavBar>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </>
  );
};

export default Main;
