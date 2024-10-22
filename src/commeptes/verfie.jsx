import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../redux/features/authSlice";
const Verifie = () => {
  const { register, handleSubmit } = useForm();
  const { user, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(verifyOtp(data));
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('path_to_your_image.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email or Phone
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email or phone"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <a href="#" className="text-sm text-green-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md shadow-sm"
          >
            Login
          </button>

          <div className="mt-4 flex justify-center">
            <button className="mr-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-sm">
              Login with Google
            </button>
            <button className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-md shadow-sm">
              Login with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verifie;
