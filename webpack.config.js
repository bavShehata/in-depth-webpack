const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  context: __dirname,

  entry: {
    index: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
