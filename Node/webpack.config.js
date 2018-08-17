const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: path.resolve(__dirname, "client"),
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
        filename: 'bundle.[hash].js'
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss'],
        modules: [
            path.resolve(__dirname, "client/lib"),
            path.resolve(__dirname, "node_modules"),
            'node_modules'
        ]
    },

    module: {
        rules: [

            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                autoprefixer({ browsers: ['last 2 versions'] });
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]

            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000
                    }
                }]
            }, {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: ([
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            __PRODUCTION__: ENV === 'production',
            __DEV__: ENV === 'development',
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        })
    ]).concat(ENV === 'production' ? [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]),


    devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

    devServer: {
        port: process.env.PORT || 5005,
        hot: true,
        publicPath: '/demo/en/',
        contentBase: './client',
        historyApiFallback: true
    }
};