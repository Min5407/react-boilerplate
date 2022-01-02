const path = require("path");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
