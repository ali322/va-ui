let webpack = require('webpack')
let path = require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

let entry = path.join(__dirname, 'src', 'index.js')
let dist = path.join(__dirname, 'lib')

let scssLoaders = [
    { loader: 'css-loader' },
    { loader: 'sass-loader' }
]

let sassLoaders = [
    { loader: 'css-loader' },
    { loader: 'sass-loader', options: { indentedSyntax: true } }
]

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
                            use: scssLoaders,
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: sassLoaders,
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.(scss|sass)/,
                loader: ExtractTextPlugin.extract({
                    use: scssLoaders,
                    fallback: 'style-loader'
                })
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
        filename: "va-ui.js"
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
            debug: false,
            minimize:true
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
        new ExtractTextPlugin('va-ui.css')
    ]
}