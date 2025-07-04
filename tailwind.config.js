/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#23252b",
        "custom-gray-2": "#dadada",
        "background-hover": "#141519",
        "premium-icon": "#fab818",
      },
    },
  },
  plugins: [],
};
