/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader'},
      { test: /\.css$/, loader: 'css-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: '#eval-source-map',
  plugins: [
  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(false)
  }),
  // new webpack.DefinePlugin({
  //   'process.env.NODE_ENV': JSON.stringify('production')
  // }),
  // new webpack.optimize.UglifyJsPlugin()
]
}
