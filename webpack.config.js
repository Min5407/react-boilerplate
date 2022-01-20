const miniCssExtratPlugin = require("mini-css-extract-plugin");

const path = require("path");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      hot: true,
    },
    port: 3000,
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
        test: /\.css$/i,
        use: [miniCssExtratPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new miniCssExtratPlugin()],
};
