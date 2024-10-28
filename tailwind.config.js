// tailwind.config.js
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your app's source files
    "./node_modules/flowbite/**/*.js", // Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
};
