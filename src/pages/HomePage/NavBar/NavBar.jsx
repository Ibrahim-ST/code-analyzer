import { useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo.png"; 
import { AuthContext } from "../../../providers/AuthProvider";
import TopHeaderButton from "../../../components/TopHeaderButton";
const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }

  const navOptions = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <li to="/projects">Projects</li>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      {
        user && <li> <a href="/dashboard">Dashboard</a> </li>  
      }
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
        <div
          className={`navbar fixed layout z-10 border-b border-b-gray-900 h-0 ${
            scroll
              ? "bg-white text-black"
              : "bg-transparent bg-opacity-75 backdrop-filter backdrop-blur-3xl text-white"
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-cyan-900 text-white "
              >
                {navOptions}
              </ul>
            </div>
            <a href="#" className="flex justify-between items-center ">
              <img className="w-10" src={logo} alt="" />
              {/* <img className="w-1/2 " src={logoText} alt="" /> */}
              <h4 className="font-semibold text-xl md:text-2xl pl-3">
                CODE ANALYZER
              </h4>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 font-bold tracking-widest">
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end hidden sm:flex items-center">
            {user ? (
              <>
                <div onClick={handleLogout}>
                  <TopHeaderButton title={"Log Out"} />
                </div>
              </>
            ) : (
              <TopHeaderButton title={"Contact Us"} />
            )}
          </div>
        </div> 
  );
};

export default NavBar;
