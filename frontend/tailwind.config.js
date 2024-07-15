/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffffff",
          400: "#b3b3b3",
          500: "#9c9c9c"
        },

        secondary: {
          50: "#e7eff4",
          75: "#9bbcd0",
          100: "#72A0BC",
          200: "#3577a0",
          300: "#0c5b8c",
          400: "#084082",
          500: "#073855"
        },

        neutral: {
          50: "#fdfdfd",
          75: "#f8f8f8",
          100: "#f6f6f6",
          200: "#f2f2f2",
          300: "#efefef",
          400: "#a7a7a7",
          500: "929292"
        },

        black: {
          100: "#6b6b6b",
          200: "#2b2b2b",
          300: "#000000",
        },

        success: {
          50: "#edffec",
          75: "#b5fdaf",
          100: "#97fd8e",
          200: "#6afc5d",
          300: "#4bfb3c",
          400: "#35b02a",
          500: "#2e9925"
        },

        warning: {
          50: "#fffdec",
          75: "#fef6af",
          100: "#fdf28e",
          200: "#fded5d",
          300: "#fce93c",
          400: "#b0a32a",
          500: "#9a8e25"
        },

        danger: {
          50: "#ffecec",
          75: "#feafaf",
          100: "#fd8e8e",
          200: "#fd5d5d",
          300: "#fc3c3c",
          400: "#b02a2a",
          500: "#9a2525"
        }

      },

      fontFamily: {
        body: ['Switzer'],
        heading: ['Plein']
      }
    },
  },
  plugins: [],
}