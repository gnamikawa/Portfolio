const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cherry-bomb-one": ["Cherry Bomb One"],
        "hakushu-higerei": ["Hakushu Higerei"],
        "tetsubun-gothic": ["Tetsubun Gothic"],
      },
      colors: {
        brand: {
          linkedIn: {
            blue: "#0077b5",
            black: "#000000",
            white: "#ffffff",
          },
          github: {
            black: "#000000",
            white: "#ffffff",
          },
          youtube: {
            red: "#ff0000",
            white: "#ffffff",
            gray: "#282828",
          },
        },
        primary: "#ab3232",
      },
    },
  },
  plugins: [],
};

module.exports = config;
