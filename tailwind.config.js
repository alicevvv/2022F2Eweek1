/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'576px',
        'md':'768px',
        'lg':'1440px'
      },
      height:{
        "header":'100px'
      },
      colors:{
        mainYellow:'#FFC13E',
        mainBlack:'#1C1A24',
        darkBlue:'#2938EA',
        lightBlue:'#456EFF',
        mainGreen:'#1CC593',
        black:{
          00:'#000000',
          bg:'#1E1C29',
        }
      },
      animation:{
        'spin-slow':'spin 2.5s linear infinite'
      },
      fontFamily:{
        audiowide:['"Audiowide"',...defaultTheme.fontFamily.sans]
      },
      dropShadow:{
        'whiteCard':'0 35px 35px #ffffff'
      }
    },
  },
  plugins: [],
}
