//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        96: "0.96",
        97: "0.97",
        98: "0.98",
        99: "0.99",
        115: "1.15",
        116: "1.16",
        117: "1.17",
        118: "1.18",
        119: "1.19",
        120: "1.20",
        125: "1.25",
        130: "1.30",
        135: "1.45",
        140: "1.40",
        150: "1.50",
        160: "1.60",
        165: "1.65",
      },
      margin: {
        '65px': '65px',
        '66px': '66px',
        '67px': '67px',
        '68px': '68px',
        '69px': '69px',
        '70px': '70px',
        '71px': '71px',
        '72px': '72px',
        '73px': '73px',
        '74px': '74px',
        '75px': '75px',
        '76px': '76px',
      },
      screens: {
        'custom-lg': '1061px',
        'custom-lg-arrows': '995px',
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
