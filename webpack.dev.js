const common = require('./webpack.common.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(common, {
    devServer: {      
        host: '0.0.0.0'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            appMountId: 'root',
            inject: false,
            mobile: true,
            template: htmlWebpackTemplate,
            title: 'Hello React'
        })
    ]
});