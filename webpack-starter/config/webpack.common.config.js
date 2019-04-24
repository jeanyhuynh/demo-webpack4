const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');//Plugin that simplifies creation of HTML files to serve your bundles
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//It creates a CSS file per JS file which contains CSS
const autoprefixer = require("autoprefixer");//PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values
const CopyWebpackPlugin = require('copy-webpack-plugin');//copy our static assets to the folder we specify - ex: images.
const CleanWebpackPlugin = require('clean-webpack-plugin')//Clearing Dist folder via plugin.
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new CopyWebpackPlugin([{
            from:'./src/assets/images',
            to:'assets/images'
        }]),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: [/.js$|.ts$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/typescript'
                        ]
                    }
                }
            },

            {
                test: [/.css$|.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    },
};