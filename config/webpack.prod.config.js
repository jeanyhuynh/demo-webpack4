//Prepare resources for Production
const merge = require('webpack-merge')
const  UglifyJsPlugin = require('uglifyjs-webpack-plugin')//For minifying the Javascript
const  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')//For css optimization
const  webpackBaseConfig = require('./webpack.common.config')
module.exports = merge(webpackBaseConfig,{
    optimization: {
        minimizer:[
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
})
