const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
