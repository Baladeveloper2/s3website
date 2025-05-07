// tailwind.config.js
export default {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',  // Add your component paths
      './public/**/*.html',  // Add public folder for static HTML files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  