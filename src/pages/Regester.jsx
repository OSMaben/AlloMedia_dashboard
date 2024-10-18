import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebookF, FaApple, FaGithub } from "react-icons/fa";
import { registers } from "../redux/features/authSlice";
import VerfieAccounte from "../commeptes/VerfieAccounte";
import Back from "../assets/back.jpg"
import {Link} from "react-router-dom";


const Register = () => {
  const { error, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [verfei, setverfei] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await dispatch(registers(data));
      if (res.payload.status === "success") {
        setverfei(true);
      }
    } catch (error) {
      console.log("Error during verification:", error);
    }
  };

  const password = watch("password");

  return (
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section className="min-h-screen mb-32">
          <div className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl" style={{backgroundImage: `url(${Back})`}}>
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
            <div className="container z-10 m-auto">
              <div className="flex flex-wrap justify-center -mx-3">
                <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                  <h1 className="mt-12 mb-2 text-white text-[4rem] font-bold">Welcome!</h1>
                  <p className="text-white">We are so glad and happy to  have you over again please complete your Register process</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto">
            <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
              <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                    <h5>Register with</h5>
                  </div>
                  <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                      <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="javascript:;">
                        <FaFacebookF className="inline-block mr-1 text-blue-600 text-2xl" />
                      </a>
                    </div>
                    <div className="w-3/12 max-w-full px-1 flex-0">
                      <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="javascript:;">
                        <FaApple className="inline-block mr-1 text-black text-2xl" />
                      </a>
                    </div>
                    <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
                      <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="javascript:;">
                        <FaGithub className="inline-block mr-1  text-black text-2xl" />
                      </a>
                    </div>
                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                      <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                    </div>
                  </div>
                  <div className="flex-auto p-6">
                    {verfei ? (
                        <VerfieAccounte />
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} role="form text-left">
                          <div className="mb-4">
                            <input
                                type="text"
                                className={`text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow ${errors.name ? "border-red-500" : ""}`}
                                placeholder="Name"
                                aria-label="Name"
                                {...register("name", {
                                  required: "Name is required",
                                  minLength: {value: 3, message: "At least 3 characters"},
                                })}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            {error?.length > 0 &&
                                error.map((item, index) =>
                                    item.path === "name" ? (
                                        <p className="text-red-500 text-sm mt-1" key={index}>
                                          {item.msg}
                                        </p>
                                    ) : null
                                )}
                          </div>
                          <div className="mb-4">
                            <input
                                type="email"
                                className={`text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow ${errors.email ? "border-red-500" : ""}`}
                                placeholder="Email"
                                aria-label="Email"
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format",
                                  },
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            {error?.length > 0 &&
                                error.map((item, index) =>
                                    item.path === "email" ? (
                                        <p className="text-red-500 text-sm mt-1" key={index}>
                                          {item.msg}
                                        </p>
                                    ) : null
                                )}
                          </div>
                          <div className="mb-4">
                            <input
                                type="text"
                                className={`text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow ${errors.phone ? "border-red-500" : ""}`}
                                placeholder="Phone"
                                aria-label="Phone"
                                {...register("phone", {
                                  required: "Phone number is required",
                                  pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Invalid phone number",
                                  },
                                })}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            {error?.length > 0 &&
                                error.map((item, index) =>
                                    item.path === "phone" ? (
                                        <p className="text-red-500 text-sm mt-1" key={index}>
                                          {item.msg}
                                        </p>
                                    ) : null
                                )}
                          </div>
                          <div className="mb-4">
                            <input
                                type="password"
                                className={`text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow ${errors.password ? "border-red-500" : ""}`}
                                placeholder="Password"
                                aria-label="Password"
                                {...register("password", {
                                  required: "Password is required",
                                  minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                  },
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            {error?.length > 0 &&
                                error.map((item, index) =>
                                    item.path === "Password" ? (
                                        <p className="text-red-500 text-sm mt-1" key={index}>
                                          {item.msg}
                                        </p>
                                    ) : null
                                )}
                          </div>
                          <div className="mb-4">
                            <input
                                type="password"
                                className={`text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow ${errors.password ? "border-red-500" : ""}`}
                                placeholder="Password"
                                aria-label="Password"
                                {...register("confirmPassword", {
                                  required: "Password is required",
                                  minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                  },
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            {error?.length > 0 &&
                                error.map((item, index) =>
                                    item.path === "confirmPassword" ? (
                                        <p className="text-red-500 text-sm mt-1" key={index}>
                                          {item.msg}
                                        </p>
                                    ) : null
                                )}
                          </div>
                          <div className="min-h-6 mb-0.5 block pl-12">
                            <input
                                id="terms"
                                className="mt-0.5 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                                type="checkbox"
                            />
                            <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                                   htmlFor="terms">
                              I agree the <a href="javascript:" className="font-bold text-slate-700">Terms and
                              Conditions</a>
                            </label>
                          </div>
                          <div className="text-center">
                            <button
                                type="submit"
                                className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                                disabled={isLoading}
                            >
                              {isLoading ? "Loading..." : "Sign up"}
                            </button>
                          </div>
                          <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <Link to={'/signin'}
                               className="font-bold text-slate-700">Sign in</Link></p>
                        </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Register;