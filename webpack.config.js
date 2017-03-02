let webpack = require('webpack')
let path = require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

let entry = path.join(__dirname, 'src', 'index.js')
let dist = path.join(__dirname, 'dist')

module.exports = {
    entry,
    module: {
        rules: [{
                test: /\.(js|es6)/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.vue/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader?indentedSyntax',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devtool: false,
    output: {
        path: dist,
        libraryTarget: "umd",
        filename: "[name]-[hash:8].js"
    },
    performance: {
        hints: false
    },
    stats: {
        chunks: false,
        version: false,
        colors: true,
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            sourceMap: false,
            output: {
                comments: false
            }
        }),
        new ExtractTextPlugin('[name]-[hash:8].css')
    ]
}