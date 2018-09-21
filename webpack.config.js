const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // enable sourcemaps for debugging webpack's output
  devtool: "source-map", 
  resolve: {
    extensions: [".tsx", ".ts", ".js", "json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: "awesome-typescript-loader" },
      { test: /\.css?$/, use: ["style-loader", "css-loader"]},
      { test: /\.(png|jpg|gif)$/, use: "file-loader" },
      { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
  ]},
  externals: {
    "react": "React", 
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
      
