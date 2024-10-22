import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePassword1 } from "../redux/features/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function PasswordForm() {
  const {  isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    reset,
    getValues,
  } = useForm();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  

  const onSubmit = async (data) => {
    const res = await dispatch(UpdatePassword1(data));

    if (res.payload.status === "success") {
      toast.success(res.payload.message);
    }

    if (res.payload.response.data.status === "fail") {
      toast.error(res.payload.response.data.message);
    }

    
  };

  return (
    <div className="mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Change Password
        </h2>

        <ToastContainer />

        <p className="text-sm text-gray-500 mb-6">
          Please enter your current password and your new password. Ensure your
          new password is at least 8 characters long for better security.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Current Password
            </label>
            <input
              id="password"
              type={showCurrentPassword ? "text" : "password"}
              className={`py-3 pl-4 pr-10 block w-full border ${
                formErrors.currentPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
              placeholder="Enter your current password"
              {...register("password", {
                required: "Current password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={toggleCurrentPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
            >
              {showCurrentPassword ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 2 2 12 12 22c10-10 10-20 10-20s-10 10-10 10-10-10-10-10z" />
                  <path d="M1 1l22 22" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 2 2 12 12 22c10-10 10-20 10-20s-10 10-10 10-10-10-10-10z" />
                  <path d="M12 12m-3 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0" />
                </svg>
              )}
            </button>
            {formErrors.currentPassword && (
              <p className="text-red-500 text-sm mt-2">
                {formErrors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="relative">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              New Password
            </label>
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              className={`py-3 pl-4 pr-10 block w-full border ${
                formErrors.newPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
              placeholder="Enter your new password"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            <button
              type="button"
              onClick={toggleNewPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
            >
              {showNewPassword ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 2 2 12 12 22c10-10 10-20 10-20s-10 10-10 10-10-10-10-10z" />
                  <path d="M1 1l22 22" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 2 2 12 12 22c10-10 10-20 10-20s-10 10-10 10-10-10-10-10z" />
                  <path d="M12 12m-3 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0" />
                </svg>
              )}
            </button>
            {formErrors.newPassword && (
              <p className="text-red-500 text-sm mt-2">
                {formErrors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              className={`py-3 pl-4 pr-10 block w-full border ${
                formErrors.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
              placeholder="Confirm your new password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("newPassword") ||
                  "Passwords do not match",
                minLength: {
                  value: 8,
                  message:
                    "Confirm password must be at least 8 characters long",
                },
              })}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
            >
              {showConfirmPassword ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 2 2 12 12 22c10-10 10-20 10-20s-10 10-10 10-10-10-10-10z" />
                  <path d="M1 1l22 22" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C12 2 2 12 12 22c10-10 10-20 10-20s-10 10-10 10-10-10-10-10z" />
                  <path d="M12 12m-3 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0" />
                </svg>
              )}
            </button>
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">
                {formErrors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordForm;
