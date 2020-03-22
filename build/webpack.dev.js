const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common');
const RunElectronPlugin = require('./plugins/RunElectron');
const path = require('path');

const mode = 'development';
const config = require('./config')[mode];

module.exports = Merge(common, {
  mode,
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.env,
      'process.env.host': config.host
    }),
    new RunElectronPlugin()
  ]
});
