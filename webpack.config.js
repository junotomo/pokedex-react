const path = require('path');

module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    port:3000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
