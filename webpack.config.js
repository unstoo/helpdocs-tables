const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src-client/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
     hot: true,
     port: 3001,
     host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [ 
            {
                exclude: /node_modules|packages/,
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                 test: /\.css$/,
                 use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
        template: 'index.html'
      }),
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };