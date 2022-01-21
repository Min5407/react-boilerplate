const miniCssExtratPlugin = require("mini-css-extract-plugin");

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
    hot: true,
  },

  module: {
    rules: [
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // css
      {
        test: /\.s?css$/i,
        use: [
          miniCssExtratPlugin.loader,
          "css-loader",
          "postcss-loader", // make sure to put postcss loader to go on top of sass-loader as it wont complile "//" comment in the scss file
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new miniCssExtratPlugin()],
};
