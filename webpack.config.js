const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const args = require('yargs').argv;

const plugins = [
    new HtmlWebpackPlugin({
        title: 'My first module', // позволяет установить текст тега title
        filename: 'index.html' // имя результирующего файла
    }),
    new webpack
        .optimize
        .CommonsChunkPlugin({name: 'vendor'}),
    new webpack.HotModuleReplacementPlugin()
];

let styleLoader = [
    {
        loader: "style-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "sass-loader"
    }
];

if (args.env && args.env.styles) {
    plugins.push(new ExtractTextPlugin({filename: args.env.hash ? '[contenthash]-styles.css':'styles.css'}));
    styleLoader = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }
        ]
    });
}

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
                use: styleLoader
            }
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 9000,
        hot: true
    }
};