/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Custom colors from the original site
        'nf-purple': '#5233ff',
        'nf-orange': '#ff7e00',
        'nf-yellow': '#ffc107',
        'nf-pink': '#ff007f',
        'nf-green': '#00e676',
        'nf-blue': '#00b0ff',
        'nf-cyan': '#00e5ff',
        'nf-light-bg': '#faf8f3', // Beige/light yellow background
        'nf-secondary-bg': '#FFFBEB', // Secondary background color for alternation
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}

