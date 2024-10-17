import React, { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Deconxion } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faUser, faUserCircle, faKey } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    dispatch(Deconxion());
    navigate("/");
  }, [dispatch, navigate]);



  return (
      <>
      <nav
          className="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start ">
        <div className="container flex items-center justify-between py-0 flex-wrap-inherit">

          <div
               className="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto">

            <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
              <li>
                <NavLink to={'/dashboard'} className="flex items-center px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                   aria-current="page" href="../pages/dashboard.html">
                  <FontAwesomeIcon icon={faChartPie} className="mr-1" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to={'/profile'} className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                   href="../pages/profile.html">
                  <FontAwesomeIcon icon={faUser} className="mr-1" />
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={'signup'} className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                   >
                  <FontAwesomeIcon icon={faUserCircle} className="mr-1" />
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to={'signin'} className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                   >
                  <FontAwesomeIcon icon={faKey} className="mr-1" />
                  Sign In
                </NavLink>
              </li>
            </ul>
            <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
              <li>
                <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" target="_blank"
                   className="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-400 to-gray-100 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-slate-800 transition-all">Discover</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  );
};

export default Header;
