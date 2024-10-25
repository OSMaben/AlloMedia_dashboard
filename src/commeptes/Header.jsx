import React, { useState, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import styled, { createGlobalStyle } from 'styled-components';

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


  const GlobalStyles = createGlobalStyle`
:root {
  --primary-color: #f94a3d;
  --yellow-color: #ffcf03;
  --black-color: #212244;
  --default-color: #69697b;
  --deep-yellow: #ff9401;
  --yellow-color-1: #ffe507;
  --red-color-1: #e83b2e;
  --red-color-2: #ee3e32;
  --light-red-color: #fdecec;
  --grey-color: #eaeaea;
  --grey-color-1: #f8f8f8;
  --white-color: #fff;
  --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  // border: none;
  outline: none;

}


h1,
h2,
h3,
h4 {
  color: var(--black-color);
  line-height: 1.2;
  font-weight: 500;
}

a {
  text-decoration: none;
  color: inherit;
}

li {
  list-style-type: none;
}
    .navbar {
      padding: 2rem 0;
    }
    .navbar .row {
      justify-content: space-between;
    }
    .navbar .logo {
      justify-content: center;
    }
    .navbar .nav-list a {
      display: inline-block;
      padding: 1rem 0.5rem 1rem;
    }
    .navbar .nav-list a:not(:last-child) {
      margin-right: 0.5rem;
    }
    .navbar .col form {
      background-color: var(--white-color);
      border-radius: 0.5rem;
      box-shadow: var(--box-shadow);
      border: 2px solid rgba(105, 105, 123, 0.1);
      padding: 0.5rem 0;
      margin-right: 1.5rem;
      width: 25rem;
      position: relative;
    }
    .navbar .col form input {
      text-indent: 1rem;
      font-size: 1.4rem;
      width: 100%;
    }
    .navbar .col form input::placeholder {
      color: var(--default-color);
    }
    .navbar .col form button {
      justify-content: center;
      padding: 0.5rem;
      background-color: transparent;
      border-left: 1px solid rgba(105, 105, 123, 0.1);
      font-size: 1.7rem;
      color: var(--default-color);
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
    }
    .navbar .cart-icon {
      justify-content: center;
      color: var(--default-color);
      font-size: 2rem;
      margin-right: 1.5rem;
      position: relative;
    }
    .navbar .cart-icon span {
      position: absolute;
      top: -1.3rem;
      right: -1rem;
      padding: 0.1rem 0.5rem;
      color: var(--white-color);
      background-color: var(--primary-color);
      border-radius: 50%;
      font-size: 1.2rem;
      font-weight: 600;
    }
    
    .btn {
      display: inline-block;
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 0.7rem 2.5rem;
      border-radius: 1rem;
      font-size: inherit;
    }
    
    .navbar .btn {
      margin-left: 1rem;
      cursor: pointer;
    }
    
    .hamburger {
      font-size: 2.5rem;
      background-color: var(--primary-color);
      border-radius: 0.3rem;
      color: var(--white-color);
      padding: 0.5rem 0.7rem;
      justify-content: center;
      cursor: pointer;
      display: none;
    }
    
    .nav-list .close {
      display: none;
    }
    
    @media (max-width: 1300px) {
      .navbar .col form {
        display: none;
      }
    }
    @media (max-width: 800px) {
      .navbar .col {
        display: none;
      }
    
      .navbar .nav-list {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        max-width: 35rem;
        height: 100%;
        background-color: var(--white-color);
        z-index: 999;
        flex-direction: column;
        align-items: flex-start;
        padding: 5rem 2rem;
        transition: left 300ms linear;
      }
    
      .hamburger {
        display: flex;
      }
    
      .nav-list a {
        text-transform: uppercase;
        font-weight: 600;
      }
    
      .nav-list a:not(:last-child) {
        margin: 0 0 1rem 0;
      }
    
      .nav-list .close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 3rem;
        cursor: pointer;
        padding: 0.5rem 0.7rem;
        display: flex;
        justify-content: center;
      }
    
      .nav-list.show {
        left: 0;
      }
    
      .navbar .logo img {
        width: 15rem;
      }
    }
  `

  return (
    <>
    <GlobalStyles/>
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <Link to={'/'}
              color="blue-gray"
              className="text-3xl font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              AlloMedia
            </Link >
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
                    className="text-2xl font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                  >
                    Profile
                  </NavLink> */}
                  
                  {/* Conditionally render dashboard links based on user role */}
                  {user.user.role === "client" && (
                    <NavLink
                      to="/profile"
                      className="text-[1.5rem] font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                      Profile
                    </NavLink>
                  )}
                  {user.user.role === "livreur" && (
                    <NavLink
                      to="/livreur"
                      className="text-[1.5rem] font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                       Dashboard
                    </NavLink>
                  )}
                  {user.user.role === "manager" && (
                    <NavLink
                      to="/manager-dashboard"
                      className="text-[1.5rem] font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                       Dashboard
                    </NavLink>
                  )}
                  {user.user.role === "admin" && (
                    <NavLink
                      to="/dashboard"
                      className="text-[1.5rem] font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                    >
                       Dashboard
                    </NavLink>
                  )}

                  <Button variant="text" className="text-2xl" onClick={logout}>
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
                      className="text-2xl font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                      aria-label="Sign in"
                    >
                      Sign in
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="inline-flex items-center justify-center px-4 py-2 text-2xl font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      aria-label="Sign up"
                    >
                      Sign up
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/profile">Profile</NavLink>

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
    </>

  );
};

export default Header;
