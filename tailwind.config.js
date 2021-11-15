module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["neuzeit-grotesk", "sans-serif"],
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [],
}
