module.exports = {
  entry: './lib/ng-iban.js',
  output: {
    path: './dist',
    filename: 'ng-iban.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
