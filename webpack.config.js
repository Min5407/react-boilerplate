const path = require("path");
const miniCssExtratPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const mode = process.env.NODE_ENV || "development";
const target = isProduction ? "browserslist" : "web";
const devtool = isProduction ? false : "inline-source-map";

module.exports = {
  mode,
  target,
  devtool,

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      // asset files
      { test: /\.(png|jpe?g|gif|svg|mp4)$/i, type: "asset" },

      // babel
      {
        test: /\.jsx?$/, // js or jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // css
      {
        test: /\.(s[ac]|c)ss$/i, // reg => sass | scss | css
        use: [
          {
            loader: miniCssExtratPlugin.loader,
          },
          "css-loader",
          "postcss-loader", // make sure to put postcss loader to go on top of sass-loader as it wont complile "//" comment in the scss file
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // recommend - put it on top
    new miniCssExtratPlugin(),
    new htmlWebpackPlugin({
      template: "./src/index.html", // referencing src/index.html
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"], // allow to import file without typing the file format. Ex) import A from "./app.jsx" -> import A from "./app"
  },
};
