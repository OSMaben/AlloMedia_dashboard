import React, { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Deconxion } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faUser, faUserCircle, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Home",
    icon: faChartPie,
    path: "/",
  },
  {
    name: "Profile",
    icon: faUser,
    path: "/profile",
  },
  {
    name: "Sign Up",
    icon: faUserCircle,
    path: "/signup",
  },
  {
    name: "Sign In",
    icon: faKey,
    path: "/signin",
  },
];

const Header = () => {
  const { isLogin, user } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(user.user.role);


  const logout = useCallback(() => {
    localStorage.removeItem("token");
    dispatch(Deconxion());
    navigate("/");
  }, [dispatch, navigate]);

  const handleOpen = () => {
    setMenuOpen((cur) => !cur);
  };

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="text-3xl font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              AlloMedia
            </Typography>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {!isLogin ? (
                <>
                  <NavLink
                    to="/signin"
                    className="text-2xl font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    aria-label="Sign in"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="btn"
                    aria-label="Sign up"
                  >
                    Sign up
                  </NavLink>
                </>
              ) : (
                <>
                  {/* <NavLink
                    to="/profile"
                    className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                  >
                    Profile
                  </NavLink> */}
                  
                  {/* Conditionally render dashboard links based on user role */}
                  {user.user.role === "client" && (
                    <NavLink
                      to="/profile"
                      className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                      Profile
                    </NavLink>
                  )}
                  {user.user.role === "livreur" && (
                    <NavLink
                      to="/livreur"
                      className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                       Dashboard
                    </NavLink>
                  )}
                  {user.user.role === "manager" && (
                    <NavLink
                      to="/manager-dashboard"
                      className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                       Dashboard
                    </NavLink>
                  )}
                  {user.user.role === "admin" && (
                    <NavLink
                      to="/dashboard"
                      className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                       Dashboard
                    </NavLink>
                  )}

                  <Button variant="text" onClick={logout}>
                    Log out
                  </Button>
                </>
              )}
            </ul>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {menuOpen ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={menuOpen}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {!isLogin ? (
                  <>
                    <NavLink
                      to="/signin"
                      className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                      aria-label="Sign in"
                    >
                      Sign in
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      aria-label="Sign up"
                    >
                      Sign up
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/profile">Profile</NavLink>

                    {/* Conditionally render dashboard links based on user role in mobile menu */}
                    {user.role === "client" && <NavLink to="/dashboard">Client Dashboard</NavLink>}
                    {user.role === "livreur" && <NavLink to="/livreur-dashboard">Livreur Dashboard</NavLink>}
                    {user.role === "manager" && <NavLink to="/manager-dashboard">Manager Dashboard</NavLink>}
                    {user.role === "admin" && <NavLink to="/admin-dashboard">Admin Dashboard</NavLink>}
                    
                    <Button variant="text" onClick={logout}>
                      Log out
                    </Button>
                  </>
                )}
              </ul>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
};

export default Header;
