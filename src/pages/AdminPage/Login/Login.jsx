import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
      console.log("yes");
    //   alert("Validated!!");
    } else {
      setDisabled(true);
      console.log("no");
    //   alert("Captcha Error. Swal!!");
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-[#181547] ">
      <div className="hero-content flex-col md:flex-row">
        <div className="md:w-1/2 text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Discover the power of Code Analyzer! Log in for access to top-tier
            software services tailored for your success. Secure your entry to
            precision, performance, and innovative solutions. Join us now and
            elevate your coding experience to new heights!
          </p>
        </div>
        <div className="md:w-1/2 card w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <span
                className="absolute top-44 left-80 "
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="Enter the above text"
                className="input input-bordered"
                onMouseLeave={handleValidateCaptcha}
              />
            </div>

            {/* TODO: make button disabled for captcha */}
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                className="btn bg-[#28a745] hover:bg-[#25d84f]"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center text-[#181547] pb-2">
            <small>
              New Here? <Link to="/register">Create an account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
