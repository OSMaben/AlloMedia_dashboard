import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const colorPalette = {
    primary: "#ff5733",
    secondary: "#33cfff",
    accent: "#2c3e50",
  };

  return (
    <div className="bg-gray-50">

      
      {/* Hero Section */}
      <section className="container xl:w-[90%]  mx-auto flex w-full  items-center md:justify-between px-5 py-12 md:py-24 md:flex-row bg-gray-50 h-[90vh] overflow-hidden">
        <div className="lg:flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="title-font text-2xl md:text-5xl mb-4 font-extrabold leading-tight"
            style={{ color: colorPalette.accent }}
          >
            Fast & Reliable
            <br className="hidden lg:inline-block" />
            Food Delivery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 leading-relaxed text-gray-600  md:text-lg max-w-lg"
          >
            Order now and get your meal delivered fresh and fast, in less than
            30 minutes!
          </motion.p>
          <div className="flex gap-2 flex-wrap items-start md:items-start md:flex-row justify-around md:justify-start">
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              href="#order"
              className="inline-flex text-sm text-white py-2 px-8 focus:outline-none hover:bg-red-700 rounded md:text-lg font-semibold transition-all duration-300 mb-4 md:mb-0"
              style={{ backgroundColor: colorPalette.primary }}
            >
              Order Now
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              href="#learn"
              className="ml-0 md:ml-4 text-sm inline-flex text-gray-700 rounded bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 md:text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </motion.a>
          </div>
        </div>
        <div className="hidden md:flex">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.1 }}
            className="object-cover object-center rounded-none transition-transform duration-500 hover:scale-105 max-h-xs max-w-xs"
            alt="Delivery"
            src="./images/landingPage.webp"
            loading="lazy"
          />
        </div>
      </section>

      {/* Section with Cards */}
      <section className="container xl:w-[90%]  mx-auto text-gray-700 body-font border-t border-gray-200">
        <div className="px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
            >
              OUR SERVICES
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sm:text-3xl text-2xl font-medium title-font text-gray-900"
            >
              Delicious Meals Delivered to You
            </motion.h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <motion.div
              className="p-4 md:w-1/3 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-transform duration-500 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full"
                    style={{ backgroundColor: colorPalette.primary }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Shooting Stars
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Fresh ingredients and fast service for every order.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="p-4 md:w-1/3 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-transform duration-500 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full"
                    style={{ backgroundColor: colorPalette.secondary }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    The Catalyzer
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Delivering quality meals tailored to your taste.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="p-4 md:w-1/3 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col transition-transform duration-500 hover:scale-105">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full"
                    style={{ backgroundColor: colorPalette.accent }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Neptune
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Providing the fastest delivery experience for you.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
