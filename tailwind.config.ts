import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f172a',
          accent: '#f97316',
          muted: '#1e293b'
        }
      },
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
