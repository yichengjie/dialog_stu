var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack') ;
var path = require('path') ;
var projectRoot = path.resolve(__dirname, '../') ;
var distPath = projectRoot + "/dist" ;
var srcPath = projectRoot +"/src" ;

module.exports = {
  entry: srcPath+"/main.js",
  output: {
     path: distPath,
     publicPath: '/dist/',
     filename: '[name].js'
  },
  module: {
    loaders: [
        {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
        {test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader")}
    ]
  },
  resolve: {
      alias: {
      }
  },
  devServer: {
     historyApiFallback: true,
     noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map' ;
    module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
