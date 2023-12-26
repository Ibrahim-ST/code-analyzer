import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
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

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  console.log(user);

  const onSubmit = (data) => {
    console.log(data);
    if (user && user.email) {
      fetch("http://localhost:5000/add-projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Added a new project.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div className="min-h-screen bg-[#181547]">
      <h1 className="text-5xl font-bold  pt-5 text-white text-center">
        Welcome to Project section
      </h1>
      <div className=" hero    ">
        <div className=" mt-20 hero-content flex-col lg:flex-row">
          <div className="w-1/2 text-center lg:text-left text-white">
            <p className="py-6 w-2/3">
              Welcome to our Project Management Dashboard! As an admin, you
              wield the power to expand our portfolio effortlessly. This
              intuitive interface empowers you to seamlessly add new projects,
              ensuring our platform remains updated with the latest initiatives.
              Effortlessly input project details, including titles,
              descriptions, timelines, and relevant resources
            </p>
          </div>
          <div className=" w-full md:w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Title</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Project Title"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">title is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Category</span>
                </label>
                <input
                  type="text"
                  {...register("category", { required: true })}
                  name="category"
                  placeholder="software | machine-learning"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Category is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Description</span>
                </label>
                <textarea
                  type="text"
                  {...register("description", { required: true })}
                  name="description"
                  placeholder="Project Description"
                  className="input input-bordered"
                  rows={14}
                />
                {errors.email && (
                  <span className="text-red-600">Description is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Project Image</span>
                </label>
                <input
                  type="text"
                  {...register("imgURL", { required: true })}
                  name="imgURL"
                  placeholder="Enter Project Image URL"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">
                    Project image is required
                  </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
