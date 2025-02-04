/* eslint-env node */

const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const appPath = path.join(__dirname, 'app')
const distPath = path.join(__dirname, 'dist')

module.exports = (env = {}) => {
    const isProduction = !!env.isProduction

    let plugins = [
        new ProgressBarPlugin(),
        new WebpackBuildNotifierPlugin({ title: 'Bork dashboard' }),
        new CleanWebpackPlugin([distPath]),
        new CopyWebpackPlugin([
            { from: './index.html' },
            { from: './settings.js' },
            { from: './favicon.ico' },
        ]),
        new ExtractTextPlugin('styles.css'),
        new StyleLintPlugin({ files: path.join(appPath, '**/*.scss'), syntax: 'scss' }),
    ]

    if (isProduction) {
        plugins = [
            ...plugins,
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false },
                comments: false,
                sourceMap: false,
                mangle: true,
                minimize: true,
            }),
        ]
    }

    return {
        context: appPath,

        entry: {
            bundle: path.join(appPath, 'index.js'),
        },

        resolve: {
            modules: [
                appPath,
                'node_modules',
            ],
            alias: {
                stylesheets: path.join(appPath, 'assets', 'stylesheets'),
                components: path.join(appPath, 'components'),
            },
        },

        output: {
            path: distPath,
            filename: 'bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: appPath,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    include: appPath,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    camelCase: true,
                                    localIdentName: '[name]_[local]--[hash:base64:5]',
                                },
                            },
                            'sass-loader',
                        ],
                    }),
                },
                {
                    test: /\.(png|jpg|gif|svg|ico)$/,
                    include: appPath,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                },
                {
                    test: /\.(js|jsx)$/,
                    include: appPath,
                    exclude: /node_modules/,
                    use: 'eslint-loader',
                },
            ],
        },

        devtool: isProduction ? false : 'inline-source-map',

        devServer: {
            contentBase: distPath,
            host: '0.0.0.0',
            port: '8081',
            noInfo: true,
        },

        plugins,
    }
}
