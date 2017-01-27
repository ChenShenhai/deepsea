var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  // eval-source-map is faster for development

  devtool: 'source-map',
  // debug: true,
})



// const webpack = require('webpack');
// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// const nodeEnv = process.env.NODE_ENV || 'development';
// // const isProd = nodeEnv === 'production';
//
// // const sourcePath = path.join(__dirname, './client');
// // const staticsPath = path.join(__dirname, './static');
//
// const sourcePath = path.join(__dirname, './static/src');
// const staticsPath = path.join(__dirname, './../output/dist/');
//
// // const extractCSS = new ExtractTextPlugin('style.css');
//
// const plugins = [
//   new webpack.optimize.CommonsChunkPlugin({
//     name: 'vendor',
//     minChunks: Infinity,
//     filename: 'js/vendor.js'
//   }),
//   new webpack.DefinePlugin({
//     'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
//   }),
//   new ExtractTextPlugin('css/[name].css'),
// ];
//
//
// module.exports = {
//   devtool: 'source-map',//isProd ? 'source-map' : 'eval',
//   // context: sourcePath,
//   // entry: {
//   //   js: [
//   //     'index',
//   //     'pages/Home'
//   //   ],
//   //   vendor: [
//   //     'react',
//   //     'react-dom'
//   //   ]
//   // },
//   // output: {
//   //   path: staticsPath,
//   //   filename: 'bundle.js',
//   //   publicPath: '/',
//   // },
//
//   entry: {
//     // js: {
//     //   'admin' : 'pages/admin.js',
//     //   'dashboard' : 'pages/dashboard.js',
//     // },
//     'admin' : './static/src/pages/admin.js',
//     'dashboard' : './static/src/pages/dashboard.js',
//     vendor: ['react', 'react-dom', 'whatwg-fetch'],
//   },
//   output: {
//     path: staticsPath,
//     publicPath: '/js/',
//     filename: 'js/[name].js',
//     // chunkFilename: 'js/[id].chunk.js',
//   },
//
//   module: {
//     rules: [
//       // {
//       //   test: /\.html$/,
//       //   use: 'file-loader',
//       //   query: {
//       //     name: '[name].[ext]'
//       //   }
//       // },
//       // {
//       //   test: /\.scss$/,
//       //   use: isProd ?
//       //     extractCSS.extract({
//       //       fallbackLoader: 'style-loader',
//       //       loader: ['css-loader', 'sass-loader'],
//       //     }) :
//       //     ['style-loader', 'css-loader', 'sass-loader']
//       // },
//       { test: /\.scss$/, loader: ExtractTextPlugin.extract({
//         fallbackLoader: "style-loader",
//         loader: ['css-loader', 'sass-loader']
//       }) },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//             query: {
//               cacheDirectory: true
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
//         use: 'file-loader'
//       }
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//     modules: [
//       sourcePath,
//       'node_modules'
//     ]
//   },
//   plugins: plugins,
//   // devServer: {
//   //   contentBase: './client',
//   //   historyApiFallback: true,
//   //   port: 3001,
//   //   compress: isProd,
//   //   stats: { colors: true },
//   // }
// };
