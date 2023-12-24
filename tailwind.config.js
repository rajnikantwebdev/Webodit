/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      'outfit': ['Outfit','sans-serif'],
      'redhat' :['Red Hat Display', 'sans-serif']
    }
  },
},
plugins: [
  require('flowbite/plugin')
],})


// export default {
  
// }

