import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/HomePage/Home/Home";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage"; 
import Register from "../pages/AdminPage/Register/Register";
import Login from "../pages/AdminPage/Login/login";
import Dashboard from "../pages/DashboardPage/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/admin-login",
        element: <Login></Login>,
      },
      {
        path: "/admin",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  }
]);
