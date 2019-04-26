const common = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
    mode: 'production'
});