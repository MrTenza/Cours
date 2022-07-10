/* METTRE EN PLACE BABEL + WEBPACK */

/*

npm init -y

npm  i @babel/cli  @babel/core  @babel/preset-env babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server

Dossier src => index.js et index.html

Fichier babel.config.js
 => module.exports = {
  presets: [["@babel/preset-env"]],
};

Dand le package.json => Ajouter 2 script =>
    "webpack": "webpack",
    "start": "webpack serve"

  Créer un fichier webpack.config.js =>
  const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    open: true,
    port: 4000,
  },
};

lancer webpack => npm start webpack 
lancer le server => npm start
*/
