/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#357bbf',       // TMBA Blue
        primaryLight: '#66a3d2',  // Lighter blue for hovers/backgrounds
        primaryDark: '#225788',   // Darker blue for text/headers
        accent: '#d8803a',        // TMBA Orange
        alert: '#cc3300',         // Alert/Warning Red
        neutralDark: '#4a4a4a',   // Body text / dark neutral
        neutralLight: '#f4f4f4',  // Light gray background
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',   // Larger rounded corners
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.08)', // Soft card shadow
      },
    },
  },
  plugins: [],
}
