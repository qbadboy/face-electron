const Merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = Merge(common, {
  mode: 'production'
});
