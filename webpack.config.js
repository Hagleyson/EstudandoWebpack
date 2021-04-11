const webpack = require("webpack");
const modeDev = process.env.NODE_ENV !== "production";
const UngliflyPlugin = require("uglifyjs-webpack-plugin");
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  mode: modeDev ? "development" : "production", //modo de desenvovimento
  entry: "./src/principal.js", //ponto de entrada
  //configurando pastas de Saida - nesse caso vai salvar um arquivo um principal dentro da pasta public
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  //otimização
  optimization: {
    minimizer: [
      new UngliflyPlugin({
        cache: true,
        parallel: true, //minificar para ficar mais rápido
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  plugins: [
    //plugin que extrai o css para um arquivo externo
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
  ],
  module: {
    //rules -> array de loaders
    rules: [
      {
        //essa expressão abaixo pode pegar css, scss e sass
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", //adiciona CSS a DOM injetando a tag <style>
          "css-loader", //interpreta @import, url()....
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
