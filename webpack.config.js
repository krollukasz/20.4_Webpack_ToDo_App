const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  const environment = env ||  "production";

  return {
    mode: environment,
    entry: "./src/index.js",
    optimization: {
      minimize: false,
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "app." + environment + ".bundle.js"
    }, 
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader"},
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
  }
};