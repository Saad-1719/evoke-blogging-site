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

