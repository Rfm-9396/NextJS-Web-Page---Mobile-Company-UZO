/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner01': "url('../assets/net-fibra-movel-uzo-slideshow-xl.webp')",
        'banner02': "url('../assets/campanha-pascoa-uzo-slideshow-xl.webp')",
        'banner03': "url('../assets/tarifarios-carregamento-uzo-slideshow-xl.jpg')",
        'banner04': "url('../assets/pedir-cartao-uzo-slideshow-xl.jpg')"
      },
      colors: {
        primary: '#D9E048',
        secondary: 'rgb(247,0,118)',
        blackk: '#333'
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Dosis', 'sans-serif']
      },
      fontSize: {
        xxs: ['0.5rem', { lineHeight: '1rem' }]
      }
    },
  },
  plugins: [],
}
