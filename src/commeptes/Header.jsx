import React, { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Deconxion } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/verfei", label: "Verfei" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/blog", label: "Blog" },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { opacity: 0, y: -20, x: -20, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header className=" bg-white shadow-md w-full z-50">
      <div className="container xl:w-[90%]  mx-auto  flex items-center justify-between p-5">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            className="w-[140px] h-auto"
            src="../../public/images/logo1.png"
            alt="Logo"
          />
        </NavLink>

        {/* Burger Menu Icon for Mobile and Tablets */}
        <button onClick={toggleMenu} className="block md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex md:flex-row space-x-8 text-sm font-medium text-gray-700">
          {navItems.map(({ path, label }) => (
            <NavLink key={path} to={path} className="hover:text-gray-900 transition duration-300  ease-in-out transform hover:-translate-y-1">
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Buttons for Large Screens */}
        <div className="hidden md:flex items-center space-x-6">
          {!isLogin ? (
            <>
              <NavLink to="/signin" className="font-medium text-gray-600 text-sm hover:text-gray-900">
                Sign in
              </NavLink>
              <NavLink to="/signup" className="px-3 py-2 text-white bg-indigo-600 text-sm rounded hover:bg-indigo-500 transition duration-300">
                Sign up
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" className="px-3 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-500 transition duration-300">
                Profile
              </NavLink>
              <button onClick={logout} className="px-3 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-700 transition duration-300">
                Log out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden container mx-auto flex flex-col items-start bg-white shadow-lg py-5 space-y-4"
        >
          {navItems.map(({ path, label }) => (
            <motion.div
              key={path}
              
              className="w-full px-4 py-2 text-sm"
              onClick={handleMenuClose}
            >
              <NavLink to={path} className="text-sm font-medium text-gray-700 hover:text-gray-900 w-full text-left">
                {label}
              </NavLink>
            </motion.div>
          ))}
          {!isLogin ? (
            <>
              <motion.div className="w-full px-4 py-2" onClick={handleMenuClose}>
                <NavLink to="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sign in
                </NavLink>
              </motion.div>
              <motion.div className="w-full px-4 py-2" onClick={handleMenuClose}>
                <NavLink to="/signup" className="px-6 text-sm py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition duration-300">
                  Sign up
                </NavLink>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className="w-full px-4 py-2" onClick={handleMenuClose}>
                <NavLink to="/profile" className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition duration-300">
                  Profile
                </NavLink>
              </motion.div>
              <motion.div className="w-full px-4 py-2" onClick={() => { logout(); handleMenuClose(); }}>
                <button className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700 transition duration-300">
                  Log out
                </button>
              </motion.div>
            </>
          )}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
