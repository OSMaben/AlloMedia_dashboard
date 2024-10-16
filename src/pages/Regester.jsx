import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { registers } from "../redux/features/authSlice";
import VerfieAccounte from "../commeptes/VerfieAccounte";

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center bg-gradient-to-r">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        {verfei ? (
          <VerfieAccounte />
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 3, message: "At least 3 characters" },
                  })}
                  className={`w-full pl-10 pr-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-indigo-500`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}

                {error?.length > 0 &&
                  error.map((item, index) =>
                    item.path === "name" ? (
                      <p className="text-red-500 text-sm mt-1" key={index}>
                        {item.msg}
                      </p>
                    ) : null
                  )}
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-indigo-500`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
                {error?.length > 0 &&
                  error.map((item, index) =>
                    item.path === "email" ? (
                      <p className="text-red-500 text-sm mt-1" key={index}>
                        {item.msg}
                      </p>
                    ) : null
                  )}
              </div>

              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-indigo-500`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}

                {error?.length > 0 &&
                  error.map((item, index) =>
                    item.path === "phone" ? (
                      <p className="text-red-500 text-sm mt-1" key={index}>
                        {item.msg}
                      </p>
                    ) : null
                  )}
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`w-full pl-10 pr-4 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-indigo-500`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
                {error?.length > 0 &&
                  error.map((item, index) =>
                    item.path === "password" ? (
                      <p className="text-red-500 text-sm mt-1" key={index}>
                        {item.msg}
                      </p>
                    ) : null
                  )}
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-full pl-10 pr-4 py-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-indigo-500`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
                {error?.length > 0 &&
                  error.map((item, index) =>
                    item.path === "confirmPassword" ? (
                      <p className="text-red-500 text-sm mt-1" key={index}>
                        {item.msg}
                      </p>
                    ) : null
                  )}
              </div>

              {isLoading ? (
                <button
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center"
                  disabled
                >
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  ></svg>
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Sign Up
                </button>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
