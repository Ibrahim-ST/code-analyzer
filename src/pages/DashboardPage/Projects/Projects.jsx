import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheck, FaEye, FaEyeSlash, FaList } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Projects = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login successful.",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold bg-[#181547] text-white text-center">
          Welcome to Project section
        </h1>
        <div className=" hero min-h-screen bg-[#181547] ">
          <div className=" mt-20 hero-content flex-col lg:flex-row">
            <div className="w-1/2 text-center lg:text-left text-white">
              <p className="py-6 w-2/3">
                Join the Code Analyzer community! Sign up now to unlock a world
                of tailored software solutions. Your gateway to innovation,
                efficiency, and seamless coding experiences awaits. Start your
                journey towards software excellence today!
              </p>
            </div>
            <div className=" w-full md:w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#181547] hover:bg-[#181547] text-white"
                    type="submit"
                    value="Add New Project"
                  />
                </div>
              </form>
              <p className="text-center text-[#181547] pb-2">
                <small>
                  Already have an account <Link to="/admin-login">Login</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
