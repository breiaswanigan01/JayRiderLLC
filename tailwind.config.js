//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        115: "1.15",
        116: "1.16",
        117: "1.17",
        118: "1.18",
        119: "1.19",
        120: "1.20",
        115: "1.15",
        125: "1.25",
        130: "1.30",
        135: "1.45",
        140: "1.40",
        150: "1.50",
        160: "1.60",
        165: "1.65",
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
