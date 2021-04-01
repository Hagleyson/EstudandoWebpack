const webpack = require("webpack");

module.exports = {
  mode: "development", //modo de desenvovimento
  entry: "./src/principal.js", //ponto de entrada
  output: /*saida, vai salvar um arquivo um principal dentro da pasta public*/ {
    filename: "principal.js",
    path: __dirname + "/public",
  },
};
