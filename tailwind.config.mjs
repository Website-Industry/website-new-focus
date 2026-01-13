/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette principale réduite basée sur le site d'origine
        primary: {
          DEFAULT: '#5233ff', // Violet principal
          dark: '#4a2dff', // Violet foncé pour hover
        },
        accent: {
          DEFAULT: '#F6A20E', // Orange pour les CTA
          dark: '#d8920c', // Orange foncé pour hover
        },
        blue: {
          DEFAULT: '#0284c7', // Bleu pour certaines sections
          light: '#0ea5e9',
        },
        // Backgrounds
        background: {
          DEFAULT: '#ffffff', // Blanc
          light: '#faf8f3', // Beige/light yellow background
          secondary: '#FFFBEB', // Background secondaire pour alternation (défini explicitement)
        },
        // Textes
        text: {
          DEFAULT: '#1f2937', // Gris foncé
          light: '#6b7280', // Gris clair
        },
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

