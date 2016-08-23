var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    prod = require('./webpack.prod.js');

var production = process.env.PRODUCTION;

var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: 'webpack-zepto'
    }),
    new ExtractTextPlugin(production ? "style.[hash].css" : "style.css", {
        disable: false,
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin(production ? "vendor.[hash].js" : "vendor.js")
];

if(production) {
    prod.folder('./output/static/');
    plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
    plugins.push(new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'index.tpl',
        inject: true
    }))
}

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, '/output/static'),
        publicPath: production ? "./static/" : "static/",
        filename: production ? "build.[hash].js" : "build.js",
        chunkFilename: "[id].[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader")
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    vue: {
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },

    plugins: plugins,

    stats: {
        colors: true
    },

    resolve: {
        extensions: ['', '.js', '.vue']
    },

    devtool: 'source-map'
};