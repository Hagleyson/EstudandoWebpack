const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development", //modo de desenvovimento
  entry: "./src/principal.js", //ponto de entrada
  //configurando pastas de Saida - nesse caso vai salvar um arquivo um principal dentro da pasta public
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
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
    ],
  },
};
