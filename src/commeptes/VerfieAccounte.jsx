import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { resendVerification } from "../redux/features/authSlice";
import { ToastContainer, toast } from "react-toastify";

const VerfieAccounte = () => {
  const { error, isLoading , token} = useSelector((state) => state.auth);
  console.log(token);
  
  const dispatch = useDispatch();

  const handlSubmit = async () => {
    console.log("hhhh");

    const res = await dispatch(resendVerification());
    console.log(res);

    if (res.payload.status === "success") {
      toast.success(
        " Please check your email for the verification link to complete your  registration."
      );
    }
  };

  return (
    <div className="flex items-center">
       <ToastContainer />
      <div className=" rounded-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md lg:max-w-lg transform transition-all hover:scale-105 duration-300">
        <div className=" space-y-3 sm:space-y-4">
       
          <div className="flex justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12  text-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-indigo-600">
            Congratulations!
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-gray-700">
            Your account has been created successfully.
          </p>
          <p className="text-xs sm:text-sm lg:text-sm text-gray-500">
            Please check your email for the verification link to complete your
            registration.
          </p>
        </div>

        <div className="mt-3 sm:mt-4 bg-indigo-50 border-l-4 border-indigo-600 text-indigo-700 p-2 sm:p-3 rounded-md shadow-md">
          <p className="text-xs sm:text-sm lg:text-sm">
            Head to your inbox and click on the verification link we’ve just
            sent you. Once you do that, you’ll be all set!
          </p>
        </div>

        {/* <button className="w-full mt-4 sm:mt-5 px-3 py-2 sm:px-4 sm:py-2 bg-indigo-600 text-white text-sm sm:text-base lg:text-base font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 ease-in-out">
          Go to Email
        </button> */}

        <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 ">
          Didn’t receive the email?{" "}
          <a
            href="#"
            onClick={() => handlSubmit()}
            className="text-indigo-600 font-medium hover:underline"
          >
            Resend verification email
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerfieAccounte;
