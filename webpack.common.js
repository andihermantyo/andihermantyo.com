const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                test: /\.js$/
            },
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/
            }
        ]
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            appMountId: 'root',
            favicon: 'src/favicon.ico',
            inject: false,
            mobile: true,
            template: htmlWebpackTemplate,
            title: 'Hello React'
        })
    ]
};
