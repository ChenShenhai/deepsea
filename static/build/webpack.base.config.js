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
    'index' : './static/src/page/index/index.js', 
    // vendor: [],
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: ['transform-runtime']
          }
        }
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
              query: { minimize: true },
              // options: {
              //   importLoaders: 1
              // } // translates CSS into CommonJS
            },

            // {
            //   loader: 'postcss-loader',
            // },
            
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
      '@@page': path.join(sourcePath, './page/'),
      '@@app': path.join(sourcePath, './app/'),
      '@@module': path.join(sourcePath, './module/'),
      '@@component': path.join(sourcePath, './component/'),
      '@@view': path.join(sourcePath, './view/'),
      '@@api': path.join(sourcePath, './api/'),
      '@@util': path.join(sourcePath, './util/'),
      '@@text': path.join(sourcePath, './text/'),
      '@@config': path.join(sourcePath, './config'),
      '@@asset': path.join(sourcePath, './asset'),
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