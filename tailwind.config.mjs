/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAFAF3',
          100: '#F4F2E0',
          200: '#E8E4C4',
          300: '#F4E5A3',
          400: '#E8D66D',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#8B7310',
          800: '#6B5A0E',
          900: '#4A3F0A',
        },
        rose: {
          50: '#FDF5F5',
          100: '#FAE8E8',
          200: '#F5D0D0',
          300: '#FADADD',
          400: '#F4B8B8',
          500: '#F4C2C2',
          600: '#E8A5A5',
          700: '#D48787',
          800: '#A85F5F',
          900: '#7D4646',
        },
      },
      fontFamily: {
        heading: ['WindSong', 'cursive'],
        body: ['Source Serif 4', 'serif'],
      },
    },
  },
  plugins: [],
}