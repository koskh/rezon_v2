const path = require('path');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractApplicationCss = new ExtractTextPlugin({ filename: 'index.css', allChunks: true });
const extractGlobalCss = new ExtractTextPlugin({ filename: 'global.css', allChunks: true });


module.exports = {
    entry: {
        index: path.join(__dirname, '../client/scripts/index.js'),
        react: [
            'react', 'react-dom', 'react-router', 'react-router-dom', 'react-intl',
            'redux', 'react-redux', 'react-router-redux', 'history'
        ],

        polyfill: 'babel-polyfill',
        moment: 'moment',
        lodash: 'lodash',
        // json: path.join(__dirname, '../client/scripts/test.json')
    },

    output: {
        path: path.resolve('./dist', 'static'),
        publicPath: '/',
        filename: '[name].js'
    },

    devtool: 'source-map',

    watchOptions: {
        aggregateTimeout: 300
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            //
            {
                test: /\.json$/,
                use: 'json-loader'
            },

            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            //
            {
                test: /\.png$/,
                use:'file-loader'
            },

            {
                test: /index\.(css|pcss)$/,
                use: extractApplicationCss.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[folder]_[name]__[local]--[hash:base64:5]',
                            sourceMap: true,
                            importLoaders: 1,
                            // minimize: true
                        }
                    },
                    'postcss-loader'
                    ]
                })
            },

            {
                test: /global\.(css|pcss)$/,
                use: extractGlobalCss.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        }
                    },
                    'postcss-loader'
                    ]
                })
            },
        ]
    },
    //
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            PROJECT_ENV: JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/html', 'index.html'),
            favicon: path.join(__dirname, '../client/media', 'favicon.ico'),
            hash: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react', 'lodash', 'polyfill', 'moment']
            // children: true,
            // async: true,
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),

        extractApplicationCss,
        extractGlobalCss,

    //     // new CopyWebpackPlugin(
    //     //     [
    //     //         { from: 'src/static_assets', to: 'files' }
    //     //     ], {
    //     //         ignore: [],
    //     //         copyUnmodified: true
    //     //     }
    //     // ),
    //     // new WebpackShellPlugin({onBuildStart:[], onBuildEnd:['ln -s /media/Linux_Soft/StarDict_Словари/Sound_En/ build/sounds']})
    //
    ]

};
