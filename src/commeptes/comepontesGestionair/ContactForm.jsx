import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userWithResto } from "../../redux/features/adminSlice";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineLock,
  AiOutlineUpload,
} from "react-icons/ai"; // React Icons

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.admin);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [darkMode, setDarkMode] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (data) => {
    if (data.image[0] && data.image[0].size > 2097152) {
      setError("image", {
        type: "manual",
        message: "Image size must be less than 2MB",
      });
    } else {
      dispatch(userWithResto(data));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen w-full bg-gray-900 text-white"
          : "min-h-screen w-full bg-gray-100 text-gray-900"
      }
    >
      {/* Dark/Light Mode Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-indigo-600 text-white py-1 px-4 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Registration Form */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 mx-auto max-w-7xl space-x-6">
        <div
          className={
            darkMode
              ? "w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6"
              : "w-full max-w-lg bg-white rounded-lg shadow-lg p-6"
          }
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Create Manager & Restaurant
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Image Upload */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Upload Image
              </label>
              <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4">
                <AiOutlineUpload className="text-4xl text-gray-500" />
                <p className="text-gray-500 mt-2">Click or drag image here</p>
                <input
                  type="file"
                  {...register("image", {
                    required: "Image is required",
                    validate: {
                      fileSize: (files) =>
                        files[0]?.size > 2097152
                          ? "Image size must be less than 2MB"
                          : true,
                      fileType: (files) =>
                        ["image/jpeg", "image/png"].includes(files[0]?.type) ||
                        "Only JPEG or PNG images are allowed",
                    },
                  })}
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-4 w-32 h-32 object-cover rounded-md"
                />
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Name</label>
                <div className="flex items-center border rounded-md  focus-within:border-indigo-500 p-2">
                  <AiOutlineUser className="mr-2" />
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter name"
                    className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                      errors.name ? "text-red-500" : ""
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Email</label>
                <div className="flex items-center border rounded-md  focus-within:border-indigo-500 p-2">
                  <AiOutlineMail className="mr-2" />
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
                      errors.email ? "text-red-500" : ""
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <div className="flex items-center border rounded-md  focus-within:border-indigo-500 p-2">
                  <AiOutlinePhone className="mr-2" />
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
                      errors.phone ? "text-red-500" : ""
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Restaurant Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Restaurant Name
                </label>
                <div className="flex items-center border rounded-md  focus-within:border-indigo-500 p-2">
                  <AiOutlineHome className="mr-2" />
                  <input
                    type="text"
                    {...register("restoname", {
                      required: "Restaurant name is required",
                    })}
                    placeholder="Enter restaurant name"
                    className={`w-full border-0 bg-transparent focus:outline-none text-sm ${
                      errors.restoname ? "text-red-500" : ""
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
              <div className="relative col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="flex items-center border rounded-md  focus-within:border-indigo-500 p-2">
                  <AiOutlineLock className="mr-2" />
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
                      errors.password ? "text-red-500" : ""
                    }`}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition duration-150"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Create Account"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
