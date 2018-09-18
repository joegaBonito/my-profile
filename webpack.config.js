var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          //presets: ['@babel/preset-env'],
          plugins: [
            require('@babel/plugin-syntax-dynamic-import'),
            require('@babel/plugin-syntax-class-properties'),
            require('@babel/plugin-proposal-class-properties')
          ]
        }
      }
    },
    {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'sass-loader!style-loader!css-loader'
      },
      {
          test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg|JPG)$/,
          loader: 'url-loader?limit=100000'
      }
    ]
  }
};
