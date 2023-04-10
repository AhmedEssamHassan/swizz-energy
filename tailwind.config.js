/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-color": "#222",
        "main-color": "#EED484",
        "bg-color": "#C00000"
      },
    },
  },
  plugins: [],
};
