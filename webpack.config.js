const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My first module', // позволяет установить текст тега title
            filename: 'main.html' // имя результирующего файла
        }),
        new webpack
            .optimize
            .CommonsChunkPlugin({name: 'vendor'}),
        new ExtractTextPlugin({filename: 'styles.css'})
    ]
};