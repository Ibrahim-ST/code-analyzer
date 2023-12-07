import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <li to="/allWorks">Projects</li>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div>
        <div
          className={`navbar fixed px-2 py-1 md:px-16 md:py-4 z-10  ${
            scroll ? "bg-white text-black" : "bg-transparent text-white"
          } `}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white"
              >
                {navOptions}
              </ul>
            </div>
            <a href="your_link_here" className="flex items-center">
              <img className="w-16" src={logo} alt="" />
              <h4 className="font-semibold text-xl md:text-2xl pl-3">CODE ANALYZER</h4>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1 font-bold tracking-widest">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-primary text-white">Hire Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
