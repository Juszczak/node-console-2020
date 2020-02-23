const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = !!process.env.WEBPACK_PRODUCTION;

const htmlPluginConfig = {template: './src/index.html'};
const htmlPlugin = new HtmlWebpackPlugin(htmlPluginConfig)

const copyPlugin = new CopyWebpackPlugin([{
  from: './src/style.css'
}]);

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [htmlPlugin, copyPlugin],
  mode: isProduction ? 'production' : 'development',
  devServer: {
    port: +process.env.PROXY_PORT || 8080,
  }
};
