/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './src/index.html',
  ],
  theme: {
    extend: {
      colors: {
        text: '#F3F4F6',
        background: '#151D28',
        primary: '#239A8F',
        secondary: '#38BDF8',
        accent: '#14B8A6',
        // extracted from previous CSS variables
        border: 'rgba(243, 244, 246, 0.12)',
        surface: 'rgba(255, 255, 255, 0.04)',
        muted: 'rgba(243, 244, 246, 0.7)',
        card: "#1b2330",
        'card-foreground': "#f3f4f6",
        success: '#21c45d'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(35, 154, 143, 0.4), 0 0 40px rgba(35, 154, 143, 0.2)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { '2xl': '1400px' },
      },
    },
  },
  plugins: [],
};
