// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/**/*.{ts,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",

//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       // keyframes: {
//       //   draw: {
//       //     '0%': { strokeDasharray: '0, 100' },
//       //     '100%': { strokeDasharray: '100, 0' },
//       //   },
//       // },
//       // animation: {
//       //   draw: 'draw 2s ease-in-out forwards',
//       // },
//       // Uncomment and customize as needed
//       // backgroundImage: {
//       //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       // },
//     },
//   },
//   plugins: [
    
//   ],
// };


// module.exports = config;


// const {

// } = require("tailwindcss/lib/util/flattenColorPalette");
// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/**/*.{ts,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       // keyframes: {
//       //   draw: {
//       //     '0%': { strokeDasharray: '0, 100' },
//       //     '100%': { strokeDasharray: '100, 0' },
//       //   },
//       // },
//       // animation: {
//       //   draw: 'draw 2s ease-in-out forwards',
//       // },
//       // Uncomment and customize as needed
//       // backgroundImage: {
//       //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       // },
//       textStrokeWidth: {
//         '1': '1px',
//         '2': '2px',
//         '3': '3px',
//         // add more as needed
//       },
//       textStrokeColor: {
//         black: '#000',
//         white: '#fff',
//         // add more as needed
//       },
//     },
//   },
//   plugins: [
//     function ({ addUtilities, theme, e }) {
//       const textStrokeWidth = theme('textStrokeWidth');
//       const textStrokeColor = theme('textStrokeColor');

//       const utilities = {};

//       Object.keys(textStrokeWidth).forEach(key => {
//         utilities[`.${e(`text-stroke-${key}`)}`] = {
//           '-webkit-text-stroke-width': textStrokeWidth[key],
//           'text-stroke-width': textStrokeWidth[key],
//         };
//       });

//       Object.keys(textStrokeColor).forEach(key => {
//         utilities[`.${e(`text-stroke-${key}`)}`] = {
//           '-webkit-text-stroke-color': textStrokeColor[key],
//           'text-stroke-color': textStrokeColor[key],
//         };
//       });

//       addUtilities(utilities);
//     },
//   ],
// };

// module.exports = config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/**/*.{ts,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       // keyframes and animation can be uncommented and customized as needed
//       // keyframes: {
//       //   draw: {
//       //     '0%': { strokeDasharray: '0, 100' },
//       //     '100%': { strokeDasharray: '100, 0' },
//       //   },
//       // },
//       // animation: {
//       //   draw: 'draw 2s ease-in-out forwards',
//       // },
//       // backgroundImage: {
//       //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       // },
//       textStrokeWidth: {
//         '1': '1px',
//         '2': '2px',
//         '3': '3px',
//         // add more as needed
//       },
//       textStrokeColor: {
//         black: '#000',
//         white: '#fff',
//         // add more as needed
//       },
//     },
//   },
//   plugins: [
//     function ({ addUtilities, theme, e }) {
//       const textStrokeWidth = theme('textStrokeWidth');
//       const textStrokeColor = theme('textStrokeColor');

//       const utilities = {};

//       Object.keys(textStrokeWidth).forEach(key => {
//         utilities[`.${e(`text-stroke-width-${key}`)}`] = {
//           '-webkit-text-stroke-width': textStrokeWidth[key],
//         };
//       });

//       Object.keys(textStrokeColor).forEach(key => {
//         utilities[`.${e(`text-stroke-color-${key}`)}`] = {
//           '-webkit-text-stroke-color': textStrokeColor[key],
//         };
//       });

//       addUtilities(utilities, ['responsive', 'hover']);
//     },
//   ],
// };

// export default config;


import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {

      
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.underline-animation': {
          position: 'relative',
          display: 'inline-block',
        },
        '.underline-animation::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0', // Adjust as needed
          width: '0',
          height: '2px', // Adjust as needed
          backgroundColor: 'currentColor',
          transition: 'width 0.3s ease-in-out',
        },
        '.underline-animation:hover::after': {
          width: '100%',
        },
      });
    },
    
  ],
};

export default config;

