const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('./paths.js')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1, modules: true }},
          {loader: 'sass-loader', options: {sourceMap: true}},
        ],
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
