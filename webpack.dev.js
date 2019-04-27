const common = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
    devServer: {      
        host: '0.0.0.0'
    },
    mode: 'development'
});