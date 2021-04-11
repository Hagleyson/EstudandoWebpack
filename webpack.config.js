const webpack = require("webpack");

module.exports = {
  mode: "development", //modo de desenvovimento
  entry: "./src/principal.js", //ponto de entrada
  //configurando pastas de Saida - nesse caso vai salvar um arquivo um principal dentro da pasta public
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  module: {
    //rules -> array de loaders
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //adiciona CSS a DOM injetando a tag <style>
          "css-loader", //interpreta @import, url()....
        ],
      },
    ],
  },
};
