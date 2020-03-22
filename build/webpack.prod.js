const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common');

const mode = 'production';
const config = require('./config')['mode'];

module.exports = Merge(common, {
  mode,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.env
    })
  ]
});
