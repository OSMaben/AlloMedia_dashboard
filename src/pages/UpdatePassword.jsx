import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { UpdatePassword } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import Back from "../assets/back.jpg"; // Background image

const UpdatPassword = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newpassword = watch("newPassword");

  const submit = async (data) => {
    try {
      const res = await dispatch(UpdatePassword(data));

      if (res.payload.status === "success") {
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to update password:", error);
    }
  };

  return (
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section className="min-h-screen mb-32">
          <div
              className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
              style={{ backgroundImage: `url(${Back})` }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
            <div className="container z-10 m-auto">
              <div className="flex flex-wrap justify-center -mx-3">
                <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                  <h1 className="mt-12 mb-2 text-white text-[3rem] font-bold">
                    Update Password
                  </h1>
                  {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="container m-auto">
            <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
              <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                    <h5 className="font-semibold text-gray-700">Reset your password</h5>
                  </div>

                  <form onSubmit={handleSubmit(submit)} className="space-y-6 p-6">
                    {/* Verification Code */}
                    <div>
                      <label className="block text-gray-700 font-semibold">
                        Verification Code
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                                errors.code ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                            type="text"
                            placeholder="Enter the verification code"
                            {...register("code", {
                              required: "Verification code is required",
                            })}
                        />
                      </div>
                      {errors.code && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.code.message}
                          </p>
                      )}
                      <p className="text-gray-500 text-sm mt-1">
                        Please enter the code you received via email. It will expire
                        in 5 minutes.
                      </p>
                    </div>

                    {/* New Password */}
                    <div>
                      <label className="block text-gray-700 font-semibold">
                        New Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                                errors.newPassword ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                            type="password"
                            placeholder="New Password"
                            {...register("newPassword", {
                              required: "New password is required",
                              minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                              },
                            })}
                        />
                      </div>
                      {errors.newPassword && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.newPassword.message}
                          </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-gray-700 font-semibold">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                                errors.confirmPassword ? "border-red-500" : "border-gray-300"
                            } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                              required: "Please confirm your password",
                              validate: (value) =>
                                  value === newpassword || "Passwords do not match",
                            })}
                        />
                      </div>
                      {errors.confirmPassword && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword.message}
                          </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    {isLoading ? (
                        <button
                            disabled
                            type="button"
                            className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
                        >
                          {/* Loading Indicator */}
                          <svg
                              aria-hidden="true"
                              role="status"
                              className="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.1256C59.7037 10.7566 63.5468 11.6392 66.8698 12.6398C69.5739 13.4866 71.7828 15.5359 72.2951 18.3236C72.8164 21.0726 70.7801 24.0213 67.7628 24.9398C66.6757 25.3636 65.6194 25.6887 64.7102 25.9013C66.6811 27.0654 68.2711 28.5056 68.6405 30.5594C68.9868 32.5888 67.6428 34.7234 65.6996 35.0297C64.9324 35.1336 64.1453 35.2265 63.3769 35.3086C66.6764 36.9684 69.8851 39.2174 72.3543 42.0883C75.1462 45.6832 73.4713 49.9704 71.5632 53.696C70.7637 55.6695 71.6311 57.7346 73.7419 58.0144C76.3191 58.3574 78.6589 55.6243 80.4719 53.4528C82.9256 50.6795 85.2429 47.7048 87.0588 44.4363C88.8747 41.1678 89.5398 36.6615 89.6547 32.3105C89.7491 29.9396 92.0825 27.9432 93.9676 39.0409Z"
                                fill="currentColor"
                            />
                          </svg>
                          Loading...
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full"
                        >
                          Update Password
                        </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default UpdatPassword;
