import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { forgetPassword } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from "react-router-dom";
import { FaFacebookF, FaApple, FaGithub } from "react-icons/fa";
import Back from "../assets/back.jpg";
import {Link} from "react-router-dom";


const ForgetPassword = () => {
  const [message, setMessage] = useState("");
  const { messageForgetPassword, isLoading, status } = useSelector(
      (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(forgetPassword(data));
  };

  if (status) {
    navigate("/updit-password");
  }

  return (
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section className="min-h-screen mb-32">
          <div
              className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
              style={{ backgroundImage: `url(${Back})` }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
            <div className="container z-10 m-auto">
              <div className="flex flex-wrap justify-center -mx-3">
                <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                  <h1 className="mt-12 mb-2 text-white text-[4rem] font-bold">
                    Forgot Password?
                  </h1>
                  <p className="text-white">
                    Enter your email to reset your password.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container m-auto">
            <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
              <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                    <h5>Reset your password with</h5>
                  </div>

                  <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                      <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                        <FaFacebookF className="inline-block mr-1 text-blue-600 text-2xl" />
                      </a>
                    </div>
                    <div className="w-3/12 max-w-full px-1 flex-0">
                      <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                        <FaApple className="inline-block mr-1 text-black text-2xl" />
                      </a>
                    </div>
                    <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
                      <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75">
                        <FaGithub className="inline-block mr-1  text-black text-2xl" />
                      </a>
                    </div>
                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                      <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">
                        or
                      </p>
                    </div>
                  </div>

                  <div className="flex-auto p-6">
                    {messageForgetPassword && (
                        <div className="mb-4 text-red-500 text-center">
                          {messageForgetPassword}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.email ? "border-red-500" : ""
                            }`}
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                              },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                            </p>
                        )}
                      </div>

                      {isLoading ? (
                          <button
                              disabled
                              type="button"
                              className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center w-full"
                          >
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 me-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                              />
                              <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69443 37.792 4.19778 38.429 6.62326C39.0661 9.04873 41.5328 10.4714 44.0202 10.1071C47.924 9.49341 51.9055 9.47816 55.8073 10.0676C60.8788 10.8229 65.7452 12.5725 70.0933 15.2277C74.4415 17.8828 78.1978 21.3856 81.1563 25.5545C83.606 28.9006 85.4843 32.5758 86.7252 36.4645C87.5303 38.8282 89.5422 40.2719 91.9676 39.0409Z"
                                  fill="currentColor"
                              />
                            </svg>
                            Loading...
                          </button>
                      ) : (
                          <button
                              type="submit"
                              className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                            Send Reset Link
                          </button>
                      )}
                    </form>
                  </div>
                  <div className="px-6 pt-0 pb-6 mb-6 text-center border-t-0">
                    <p className="mx-auto mb-6 text-sm leading-normal">
                      Remember your password?
                      <Link to={'/signin'}
                            className="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default ForgetPassword;
