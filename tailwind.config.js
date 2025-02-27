/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "libre-lightPurple": "#C09FF8",
        "libre-lightGreen": "#57BF9C",
        "libre-navy": "#313179",
        "libre-lightNavy": "#5E6D7E",
        "libre-gray": "#787878",
        "libre-purple": "#7765EC",
      },
    },
  },
  plugins: [],
};
