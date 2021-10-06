var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, "./Client/src/client.js"),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, './Client/build'),
      filename: 'bundle.js',
    }
}
