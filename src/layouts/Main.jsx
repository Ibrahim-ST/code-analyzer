import { Outlet } from "react-router-dom"; 
import Footer from "../pages/HomePage/Footer/Footer";

import MessengerCustomerChat from "react-messenger-customer-chat";
import NavBar from "../pages/HomePage/NavBar/NavBar";

const Main = () => {
  return (
    <>
      {/* <MessengerCustomerChat
        pageId="196778620181345"
        appId="1273827960685670" 
      /> */}
      <NavBar> </NavBar>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </>
  );
};

export default Main;
