const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/dev-server', path.resolve(__dirname, 'app/app.js')],
  output: { 
  	path: path.resolve(__dirname, 'build'),
   	filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: "url?limit=25000",
        exclude: /node_modules/
      },
      {
        test: /\.woff?$/,
        loader: "url?limit=100000"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      }
    ]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
