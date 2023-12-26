import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Teams = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext); 

  const onSubmit = (data) => {
    const email = user?.email;
    const { name, role, imgURL, twitter, linkedin, github, portfolio } = data;
    const team = {
      name,
      role,
      imgURL,
      social: {
        twitter, linkedin, github, portfolio
      },
      addedBy: email
    }
    console.log(team);
    if (user && user.email) {
      fetch("https://code-analyzer-server.vercel.app/add-team", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(team),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${name} added as a new team member.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div className="min-h-screen bg-[#181547] w-full">
      <h1 className="text-5xl font-bold  pt-5 text-white text-center">
        Welcome to Team section
      </h1>
      <div className="    ">
        <div className=" px-5 mt-10  flex-col lg:flex-row">
          <div className=" w-full  card flex-shrink-0    shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Member Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Member Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Member Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Member Role</span>
                </label>
                <input
                  type="text"
                  {...register("role", { required: true })}
                  name="role"
                  placeholder="Enter member role"
                  className="input input-bordered"
                />
                {errors.role && (
                  <span className="text-red-600">Member role is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Member Image</span>
                </label>
                <input
                  type="text"
                  {...register("imgURL", { required: true })}
                  name="imgURL"
                  placeholder="Enter member Image URL"
                  className="input input-bordered"
                />
                {errors.imgURL && (
                  <span className="text-red-600">Member image is required</span>
                )}
              </div>
              <div className="flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Twitter</span>
                  </label>
                  <input
                    type="text"
                    {...register("twitter")}
                    name="twitter"
                    placeholder="Enter twitter profile URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">LinkedIn</span>
                  </label>
                  <input
                    type="text"
                    {...register("linkedin")}
                    name="linkedin"
                    placeholder="Enter LinkedIn profile URL"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">GitHub</span>
                  </label>
                  <input
                    type="text"
                    {...register("github")}
                    name="github"
                    placeholder="Enter GitHub profile URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text font-semibold">Portfolio</span>
                  </label>
                  <input
                    type="text"
                    {...register("portfolio", { required: true })}
                    name="portfolio"
                    placeholder="Enter Portfolio URL"
                    className="input input-bordered"
                  />
                  {errors.portfolio && (
                    <span className="text-red-600">
                      Portfolio URL is required
                    </span>
                  )}
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#181547] hover:bg-[#181547] text-white"
                  type="submit"
                  value="Add New Team Member"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
