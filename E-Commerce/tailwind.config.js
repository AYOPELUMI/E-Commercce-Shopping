/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'modal-bg' : '#00000080',
          'custom-white': '#F4F6FA',
          'custom-white-fade' : '#F4F4F4',
          'text-custom-black' : '#212121',
          'custom-text-black' : '#4E4E4E',
          'custom-dark-brown' : '#303030',
          'custom-orange' : '#F47733',
          'custom-pink' : '#FF78BF',
          'custom-light-pink' : '#FF88C6',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#1C2499',
          'tahiti': '#CED8E6',
          'custom-white-bg' :'#F4F6FA1A',
          'custom-text-color': '#8E8E8E',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
          'custom-green':"#20888F",
          'custom-black': '#303030',
          'custom-green-bg': "#03C1611A",
          'custom-text-color-black' : '#414833',
          'custom-text-color-black-bg' : '#4148331A',
          'custom-red' : '#DC2626',
          'custom-brown' : '#85340A',
          'custom-purple' : '#8338EC',
          'custom-purple-bg' : '#8338ec1A',
          'custom-brown-bg' : '#85340A1A'
  
        },
    },

    plugins: [],
  }