const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/preline/preline.js', flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/forms'), require('preline/plugin'), flowbite.plugin(),
  ], 
}