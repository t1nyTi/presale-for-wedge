/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "maven-pro": ["Maven Pro", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "vcr-osd": ["VCR OSD Mono", "sans-serif"],
        "inter-sans": ["Inter", "sans-serif"],
      },
      animation: {
        "fadeInOut-4": "fadeInOut 4s infinite",
        "fadeInOut-3": "fadeInOut 3s infinite",
        "fadeInOut-2": "fadeInOut 2s infinite",
        "fadeInOut-1": "fadeInOut 1s infinite",
      },
    },
  },
  plugins: [],
};
