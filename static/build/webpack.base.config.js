const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './static/src');
const outputPath = path.join(__dirname, './../output/dist/');

module.exports = {
  // context: sourcePath,
  entry: {
    'admin' : './static/src/pages/admin.js',
    'dashboard' : './static/src/pages/dashboard.js',
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
  },
  output: {
    path: outputPath,
    publicPath: '/static/output/dist/',
    filename: 'js/[name].js',
  },
  module: {

    rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'jsx-loader'
      //     }
      //   ]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              // presets: ['es2015', 'react'],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ['css-loader', 'less-loader']
        })
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
      filename: 'js/[name].js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
  ]
};