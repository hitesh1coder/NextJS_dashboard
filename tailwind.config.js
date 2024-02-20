/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "lienear-gradiant":
          "linear-gradient(356.48deg, rgba(64, 155, 238, 0.67) 3.25%, #409BEE 81.12%)",
        "radial-gradiant":
          "radial-gradient(50% 36.13% at 50% 36.13%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};
