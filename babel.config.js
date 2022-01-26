module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }], // automatic - auto imports the functions that jsx transpiles to/
  ],
};
