import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  useEffect(() => {
    setShowWelcomeText(location.pathname === "/dashboard");
  }, [location.pathname]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-around flex-row-reverse ">
        {/* body content  */}
        <span className="flex flex-row-reverse justify-around items-center gap-2">
          <label htmlFor="my-drawer-2" className="  drawer-button lg:hidden">
            <FaBars />
          </label>
          <span>
            {showWelcomeText && (
              <h3 className="text-2xl sm:text-5xl">Welcome to Code Analyzer</h3>
            )}
          </span>
        </span>

        <Outlet />
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 text-white flex">
          {/* Sidebar content here */}
          {/* <li>
            <Link to="/dashboard/">Home</Link>
          </li> */}
          <li>
            <NavLink to="/dashboard/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/teams">Team</NavLink>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li className="absolute bottom-10 uppercase">
            <NavLink to="/" className="font-bold">
              Code Analyzer
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
