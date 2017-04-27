const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './../src/');
const outputPath = path.join(__dirname, './../output/dist/');

// process.noDeprecation = true;
// process.traceDeprecation = true;

module.exports = {
  // context: sourcePath,
  entry: {
    'index' : './static/src/pages/index.js',
    'sign' : './static/src/pages/sign.js',
    'dashboard' : './static/src/pages/dashboard.js',
    'work' : './static/src/pages/work.js',
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
  },
  output: {
    path: outputPath,
    publicPath: '/static/output/dist/',
    filename: 'js/[name].js',
  },

  module: {

    rules: [
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // use: ['css-loader']
          use: [
            {
              loader: 'css-loader',
              query: { minimize: true }
            }
          ]
        })
      },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ['css-loader', 'sass-loader']
      //   })
      // },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // use: ['css-loader', 'less-loader']
          use: [
            {
              loader: 'css-loader',
              query: { minimize: true }
            },
            {
              loader: 'less-loader',
              query: { minimize: true }
            }
          ]
        })
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ],
    alias: {
      '@@pages': path.join(sourcePath, './pages/'),
      '@@apps': path.join(sourcePath, './apps/'),
      '@@modules': path.join(sourcePath, './modules/'),
      '@@components': path.join(sourcePath, './components/'),
      '@@views': path.join(sourcePath, './views/'),
      '@@api': path.join(sourcePath, './api/'),
      '@@utils': path.join(sourcePath, './utils/'),
      '@@texts': path.join(sourcePath, './texts/'),
    },
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
      filename: 'js/[name].js'
    }),
  ]
};