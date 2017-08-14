"use strict";

var path = require("path");

module.exports = {
  entry: [
    "./app"
  ],
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, '/public'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".scss"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "app")
        ],
        test: /\.jsx?$/,
        query: {
          plugins: ["transform-runtime", "transform-decorators-legacy"],
          presets: ['es2015', 'stage-0', "react"]
        }
      },
      {
          test: /\.json?$/,
          loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style?sourceMap", "css?sourceMap", "sass?sourceMap"]
      },
      {
        test: /\.css$/,
        loaders: ["style?sourceMap", "css?sourceMap"]
      },
      {test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i, loader: "file-loader?name=[name].[ext]"},
    ]
  }
}
