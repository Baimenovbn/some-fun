const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')

const paths = require('./paths');
const path = require('path')


module.exports = {
  entry: path.resolve(paths.src, 'index.tsx'),
  output: {
    path: paths.build,
    filename: './source/js/bundle.js',
    publicPath: '/',
    assetModuleFilename: './source/images/[hash][ext][query]'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, '../src')
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.public, 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ]
}
