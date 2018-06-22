const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "production",
  entry: {
    devtools: './src/devtools.js',
    popup: './src/popup.js',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'src/build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ],
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
    ]
  },
}