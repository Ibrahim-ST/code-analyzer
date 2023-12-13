import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <Helmet>
          <title>Sign Up | Farmhouse Academy</title>
        </Helmet>
        <div className=" hero min-h-screen bg-[#28a745] ">
          <div className=" mt-20 hero-content flex-col lg:flex-row">
            <div className="w-1/2 text-center lg:text-left text-white">
              <h1 className="text-5xl font-bold">Sign up now!</h1>
              <p className="py-6 w-2/3">
                Register now to become a part of our prestigious football
                academy! Our sign-up process is designed to help you kick-start
                your football journey seamlessly. Joining our academy opens
                doors to a world of training, mentorship, and opportunities to
                sharpen your skills
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confPassword", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  {errors.confPassword?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.confPassword?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.confPassword?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.confPassword?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  {errors.confPassword && (
                    <span className="text-red-400">
                      {errors.confPassword.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#28a745] hover:bg-[#25d84f]"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="text-center text-[#28a745]">
                <small>
                  Already have an account <Link to="/login">Login</Link>
                </small>
              </p> 
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;