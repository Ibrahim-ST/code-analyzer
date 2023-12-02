import { useEffect, useState } from "react"; 

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
    <div>
      <div>
        <div
          className={`navbar fixed   z-10 text-black ${
            scroll ? "bg-white " : "bg-transparent "
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
                    d="M9 5l7 7-7 7"
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
            {/* <img className="w-10 hidden md:block" src="./lo.png" alt="" /> */}
            <h4>Code Analyzer</h4>
          </div>
          <div className="navbar-center hidden lg:flex  ">
            <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn glass">Hire Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
