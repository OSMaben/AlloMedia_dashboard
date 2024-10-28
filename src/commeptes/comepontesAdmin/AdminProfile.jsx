import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineLock,
  AiOutlineUpload,
} from "react-icons/ai";
import { userWithResto } from "../../redux/features/adminSlice";

const AdminProfile = () => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.admin);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const [profileImage, setProfileImage] = useState(
    "../images/user/user-06.png"
  );
  const [coverImage, setCoverImage] = useState("../images/cover/cover-01.png");
  const [bio, setBio] = useState("Write a short bio about yourself here.");
  const [jobTitle, setJobTitle] = useState("Bilal Ezzaim");
  const [location, setLocation] = useState("Super Admin");

  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onSubmit = async (data) => {
    if (data.image?.[0]?.size > 2097152) {
      setError("image", {
        type: "manual",
        message: "Image size must be less than 2MB",
      });
    } else {
      await dispatch(userWithResto(data));
      reset(); // Reset form after successful submission
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedProfileImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const uploadProfileImage = async () => {
    if (selectedProfileImage) {
      const formData = new FormData();
      formData.append("image", selectedProfileImage);

      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "http://localhost:8080/api/profile/upload/imgproflile",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percent = Math.floor((loaded * 100) / total);
              setUploadProgress(percent);
            },
          }
        );

        setSelectedProfileImage(null);
        setUploadProgress(0);
      } catch (error) {
        console.error(error);
        alert("Failed to upload profile image.");
        setUploadProgress(0);
      }
    } else {
      alert("Please select an image to upload.");
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedCoverImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setCoverImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const uploadCoverImage = async () => {
    if (selectedCoverImage) {
      const formData = new FormData();
      formData.append("coverImage", selectedCoverImage);

      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "http://localhost:8080/api/profile/upload/imgcover",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              const percent = Math.floor((loaded * 100) / total);
              setUploadProgress(percent);
            },
          }
        );

        setSelectedCoverImage(null);
        setUploadProgress(0);
      } catch (error) {
        console.error(error);
        alert("Failed to upload cover image.");
        setUploadProgress(0);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Cover Image Section */}
        <div className="relative">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-48 md:h-64 object-cover"
          />
          <label className="absolute bottom-3 right-3 bg-blue-600 text-white rounded-full px-4 py-1 cursor-pointer shadow-lg hover:bg-blue-500 transition duration-200">
            Change Cover
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              className="hidden"
            />
          </label>
          {selectedCoverImage && (
            <button
              onClick={uploadCoverImage}
              className="absolute bottom-3 left-3 bg-blue-500 text-white rounded-lg px-4 py-1 shadow-md hover:bg-blue-600 transition duration-300"
            >
              Upload Cover
            </button>
          )}
        </div>

        {/* Profile Image Section */}
        <div className="relative flex flex-col items-center -mt-16">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-white object-cover shadow-lg"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-blue-500 transition duration-200">
              <AiOutlineUpload size={20} />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="hidden"
              />
            </label>
          </div>

          {selectedProfileImage && (
            <button
              onClick={uploadProfileImage}
              className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 shadow-md hover:bg-blue-600 transition duration-300"
            >
              Upload Profile Image
            </button>
          )}

          {uploadProgress > 0 && (
            <div className="mt-2 w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}%
              </div>
            </div>
          )}

          <h3 className="mt-4 text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 text-center">
            {jobTitle}
          </h3>
          <p className="text-gray-500 text-center">{location}</p>
        </div>

        {/* About Section */}
        <div className="p-6 text-center">
          <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            About Me
          </h4>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full h-24 p-4 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
            placeholder="Write a short bio..."
          />
        </div>

        {/* Contact and Settings Section */}
        <div className="px-4 md:px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <AiOutlineMail size={24} className="text-blue-500 mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className={`bg-gray-100 focus:outline-none text-gray-600 w-full ${
                  errors.email ? "border border-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <AiOutlinePhone size={24} className="text-blue-500 mr-3" />
              <input
                type="tel"
                placeholder="Your Phone"
                className={`bg-gray-100 focus:outline-none text-gray-600 w-full ${
                  errors.phone ? "border border-red-500" : ""
                }`}
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <AiOutlineHome size={24} className="text-blue-500 mr-3" />
              <input
                type="text"
                placeholder="Location"
                className="bg-gray-100 focus:outline-none text-gray-600 w-full"
                {...register("location")}
              />
            </div>

            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <AiOutlineLock size={24} className="text-blue-500 mr-3" />
              <input
                type="password"
                placeholder="New Password"
                className="bg-gray-100 focus:outline-none text-gray-600 w-full"
                {...register("password")}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            className="mt-6 w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-500 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
