import React, { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Deconxion } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faUser,
  faUserCircle,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
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
  {
    name: "Dashboard",
    icon: faKey,
    path: "/dashboard",
  },
  {
    name: "Dashboar Livreur",
    icon: faKey,
    path: "/livreur",
  },
];

const Header = () => {
  const { error, isLogin } = useSelector((state) => state.auth);
  console.log(isLogin);
  // const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Typography color="blue-gray" className="text-lg font-bold">
              My Application
            </Typography>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className="flex items-center px-4 py-2 font-normal text-gray-900 transition-all duration-250 lg:hover:text-blue-700"
                    aria-current="page"
                  >
                    <FontAwesomeIcon icon={icon} className="mr-1" />
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="hidden items-center gap-4 lg:flex">
              <Button variant="text" onClick={logout}>
                Log out
              </Button>
              <a
                href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                target="_blank"
              >
                <Button color="gray">Discover</Button>
              </a>
            </div>
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
                {NAV_MENU.map(({ name, icon, path }) => (
                  <li key={name}>
                    <NavLink
                      to={path}
                      className="flex items-center px-4 py-2 font-normal text-gray-900 transition-all duration-250 lg:hover:text-blue-700"
                    >
                      <FontAwesomeIcon icon={icon} className="mr-1" />
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button variant="text" onClick={logout}>
                  Log out
                </Button>
                <a
                  href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                  target="_blank"
                >
                  <Button color="gray">Discover</Button>
                </a>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
};

export default Header;
