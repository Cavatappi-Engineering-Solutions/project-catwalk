const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
