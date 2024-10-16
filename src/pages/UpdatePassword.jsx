import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { UpdatePassword } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

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

      console.log(res.payload.status);

      if (res.payload.status === "success") {
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to update password:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700">
          Update Password
        </h1>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <form onSubmit={handleSubmit(submit)} className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700">Verification Code</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                data-testid="code-input"
                className={`w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border ${
                  errors.verificationCode ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-indigo-500 focus:bg-white`}
                type="text"
                placeholder="Enter the verification code"
                {...register("code", {
                  required: "Verification code is required",
                })}
              />
            </div>
            {errors.code && (
              <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
            )}
            <p className="text-gray-500 text-sm mt-1">
              Please enter the code you received via email. It will expire in 5
              minutes.
            </p>
          </div>

          <div>
            <label className="block text-gray-700">New Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                data-testid="new-password-input"
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

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                data-testid="confirmPassword-input"
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

          {isLoading ? (
            <button
              disabled
              type="button"
              className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center w-full"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition duration-300"
            >
              Update Password
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdatPassword;
