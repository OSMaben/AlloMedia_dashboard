import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"; // Import SweetAlert
import { userWithResto } from "../../redux/features/adminSlice";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineLock,
} from "react-icons/ai";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.admin);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(userWithResto(data));
    if (result.meta.requestStatus === "fulfilled") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account created successfully!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Manager & Restaurant
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Name
              </label>
              <div className="flex items-center border rounded-md border-gray-300 p-2">
                <AiOutlineUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter name"
                  className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                    errors.name ? "text-red-500" : "text-gray-800"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <div className="flex items-center border rounded-md border-gray-300 p-2">
                <AiOutlineMail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="Enter email"
                  className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                    errors.email ? "text-red-500" : "text-gray-800"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Phone
              </label>
              <div className="flex items-center border rounded-md border-gray-300 p-2">
                <AiOutlinePhone className="text-gray-500 mr-2" />
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  placeholder="Enter phone number"
                  className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                    errors.phone ? "text-red-500" : "text-gray-800"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Restaurant Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Restaurant Name
              </label>
              <div className="flex items-center border rounded-md border-gray-300 p-2">
                <AiOutlineHome className="text-gray-500 mr-2" />
                <input
                  type="text"
                  {...register("restoname", {
                    required: "Restaurant name is required",
                  })}
                  placeholder="Enter restaurant name"
                  className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                    errors.restoname ? "text-red-500" : "text-gray-800"
                  }`}
                />
              </div>
              {errors.restoname && (
                <p className="text-red-500 text-sm">
                  {errors.restoname.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative ">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <div className="flex items-center border rounded-md border-gray-300 p-2">
                <AiOutlineLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  placeholder="Enter password"
                  className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                    errors.password ? "text-red-500" : "text-gray-800"
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Cuisine Field */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Cuisine
              </label>
              <div className="flex items-center border rounded-md border-gray-300 p-2">
                <AiOutlineLock className="text-gray-500 mr-2" />
                <input
                  type="text"
                  {...register("type", {
                    required: "Cuisine is required",
                    minLength: {
                      value: 3,
                      message: "Cuisine must be at least 3 characters",
                    },
                  })}
                  placeholder="Enter Cuisine"
                  className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                    errors.type ? "text-red-500" : "text-gray-800"
                  }`}
                />
              </div>
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white rounded-md shadow hover:bg-gray-700 transition duration-150"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Create Account"}
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
