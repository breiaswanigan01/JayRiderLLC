//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
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
