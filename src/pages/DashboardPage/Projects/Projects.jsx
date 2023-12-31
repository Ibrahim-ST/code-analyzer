import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Projects = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  console.log(user);
  
  const onSubmit = (data) => {
  const email = user.email;
  const projectData= {
      ...data,
      addedBy:email
    } 
    if (user && user.email) {
      fetch("https://code-analyzer-server.vercel.app/add-projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(projectData),
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
      <div className="hero">
        <div className=" mt-10 hero-content flex-col lg:flex-row">
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
          <div className=" w-full md:w-1/2 card flex-shrink-0  max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Project Title</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  name="title"
                  placeholder="Project Title"
                  className="input input-bordered"
                />
                {errors.title && (
                  <span className="text-red-600">Title is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Project Description</span>
                </label>
                <textarea
                  type="text"
                  {...register("description", { required: true })}
                  name="description"
                  placeholder="Project Description"
                  className="input input-bordered"
                  rows={14}
                />
                {errors.description && (
                  <span className="text-red-600">Description is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Project Image</span>
                </label>
                <input
                  type="text"
                  {...register("imgURL", { required: true })}
                  name="imgURL"
                  placeholder="Enter Project Image URL"
                  className="input input-bordered"
                />
                {errors.imgURL && (
                  <span className="text-red-600">
                    Project image is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Project Category</span>
                </label>
                <div className="px-2 grid grid-cols-2">
                  <label>
                    <input
                      type="radio"
                      value="software"
                      {...register("category", { required: true })}
                    />
                    Software
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="machine-learning"
                      {...register("category", { required: true })}
                    />
                    Machine Learning
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="graphic-visual"
                      {...register("category", { required: true })}
                    />
                    Graphic Visual
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="ai"
                      {...register("category", { required: true })}
                    />
                    Artificial Intelligence
                  </label>
                </div>

                {errors.category && (
                  <span className="text-red-600">Category is required</span>
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
