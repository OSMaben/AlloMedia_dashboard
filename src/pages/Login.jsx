import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import {FaFacebookF, FaApple, FaGithub} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVerfieLogin from "../commeptes/modal/ModalVerfieLogin";
import Back from "../assets/back.jpg"
const Login = () => {
  const { error, status, isLoading } = useSelector((state) => state.auth);
  console.log(error)
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    dispatch(login(data));
  };

  return (
      <section className="min-h-screen mb-32">
        <div
            className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
            style={{backgroundImage: `url(${Back})`}}>
          <span
              className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
          <div className="container z-10 m-auto">
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                <h1 className="mt-12 mb-2 text-white text-[4rem] font-bold">Welcome !</h1>
                <p className="text-white">We are so glad and happy to  have you over again please complete your login process</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          {status ? (
              <ModalVerfieLogin/>
          ) : (
          <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
              <div
                  className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">

                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                  <h5>Login with</h5>
                </div>
                <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                  <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                       href="javascript:;">
                      <FaFacebookF className="inline-block mr-1 text-blue-600 text-2xl"/>
                    </a>
                  </div>
                  <div className="w-3/12 max-w-full px-1 flex-0">
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                       href="javascript:;">
                      <FaApple className="inline-block mr-1 text-black text-2xl"/>
                    </a>
                  </div>
                  <div className="w-3/12 max-w-full px-1 mr-auto flex-0">
                    <a className="inline-block w-full px-6 py-3 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                       href="javascript:;">
                      <FaGithub className="inline-block mr-1  text-black text-2xl"/>
                    </a>
                  </div>
                  <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                    <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                  </div>
                </div>
                <div className="flex-auto p-6 ">
                  {error && (
                      <div className="w-full mx-auto bg-white mb-[1rem]">
                        <div
                            className="mt-5 flex items-center justify-between p-3 leading-normal text-red-600 bg-red-100 rounded-lg"
                            role="alert"
                        >
                          <div className="flex items-center">
                            <p>{error}</p>
                          </div>
                        </div>
                      </div>
                  )}


                      <form onSubmit={handleSubmit(submit)} role="form text-left">

                        <div className="mb-4">

                          <input
                              data-testid="full-email-input"
                              className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                                  errors.email ? "border-red-500" : "border-gray-300"
                              } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                              type="email"
                              placeholder="Email Address"
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Enter a valid email address",
                                },
                              })}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

                        </div>
                        <div className="mb-4">
                          <input
                              className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                                  errors.password ? "border-red-500" : "border-gray-300"
                              } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                              type="password"
                              data-testid="password-input"
                              placeholder="Password"
                              {...register("password", {
                                required: "Password is required",
                                minLength: {
                                  value: 6,
                                  message: "Password must be at least 6 characters",
                                },
                              })}
                          />
                          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

                        </div>
                        <div className="flex items-center pl-12 mb-0.5 text-left min-h-6">
                          <input
                              id="rememberMe"
                              className="mt-0.5 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                              type="checkbox"
                          />
                          <label className="ml-2 font-normal cursor-pointer select-none text-sm text-slate-700"
                                 htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                              type="submit"
                              className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                              disabled={isLoading}
                          >
                            {isLoading ? (
                                <>
                                  <svg aria-hidden="true" role="status"
                                       className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101"
                                       fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"/>
                                  </svg>
                                  Loading...
                                </>
                            ) : (
                                "Sign In"
                            )}
                          </button>
                        </div>
                      </form>
                  <div className="flex items-center justify-between mt-4">
                    <Link
                        to="/forget-password"
                        className="text-sm font-bold text-slate-700 hover:text-slate-900"
                    >
                      Forgot Password?
                    </Link>
                    <Link
                        to="/signup"
                        className="text-sm font-bold text-slate-700 hover:text-slate-900"
                    >
                      Create new account
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
          )}
        </div>

      </section>
  );
};

export default Login;

