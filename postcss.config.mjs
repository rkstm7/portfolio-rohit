/** @type {import('postcss').Config} */

const config = {
  plugins: {
    tailwindcss: {},  // Add Tailwind CSS plugin
    autoprefixer: {}, // Add Autoprefixer plugin (important for vendor prefixing)
  },
};

export default config;
