const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    allowedHosts: [
      '192.168.1.12',
      'https://6c8ef20c0ed7.ngrok.io',
    ],
    disableHostCheck: true,
  },
});
