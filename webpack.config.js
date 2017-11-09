const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './app.js',
        vendor: 'jquery'
        // используем массив для нескольких вендоров
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My first module', // позволяет установить текст тега title
            filename: 'main.html' // имя результирующего файла
        }),
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'vendor'})
    ]
};