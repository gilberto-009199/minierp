'use strict';

/*const path = require('path');

module.exports = {
  entry:path.join(__dirname,'src','index'),
  output:{
    path:path.join(__dirname, '..','..','static','user
    publicPath: 'user/''),
    filename:'bundle.js',
  },
  module:{
    rules:[{
      test:/\.js$/,
      exclude:/node_modules/,
      include:/src/,
      use:{
        loader:'babel-loader'
      }
    }]
  }
}*/
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg|png|jpeg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path:path.join(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: 'user/'
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool:'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
