import { Outlet } from "react-router-dom";  
import NavBar from "../pages/HomePage/Navbar/Navbar";
import Footer from "../pages/HomePage/Footer/Footer";

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
