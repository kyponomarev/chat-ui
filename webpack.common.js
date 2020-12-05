const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        app: ['./index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.handlebars$/,
                exclude: /node_modules/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new webpack.ProvidePlugin({
            Handlebars: 'handlebars'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./app/assets", to: "./assets"}
            ]
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ],
    devServer: {
        port: 3002,
        historyApiFallback: {
            index: 'index.html',
        },
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true
    }
};
