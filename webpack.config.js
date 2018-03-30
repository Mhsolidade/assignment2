const path = require('path');
const webpack = require('webpack');
const babiliPlugin = require('babili-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let plugins = [];


const extractCSS = new ExtractTextPlugin({ filename: "assets/[name].css" })
const extractSASS = new ExtractTextPlugin({ filename: "assets/[name].css" })

plugins.push(new CopyWebpackPlugin([
    { from: __dirname + '/app/img', to: 'assets/img', force: true }
]));

plugins.push(new HtmlWepackPlugin({

    hash: true,
    minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true
    },
    filename: 'index.html',
    template: __dirname + '/app/index.html'

}));

plugins.push(
    extractCSS, extractSASS
);


if (process.env.NODE_ENV == 'production') {

    SERVICE_URL = JSON.stringify('https://gamaassigment2.firebaseapp.com/');
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    plugins.push(new babiliPlugin());

    plugins.push(new optimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        }
    }));
} else {
    let SERVICE_URL = JSON.stringify('http://localhost:3000');
}

plugins.push(new webpack.DefinePlugin({
    SERVICE_URL: SERVICE_URL
}));

module.exports = {
    mode: process.env.NODE_ENV,
    watch: true,
    entry: './app/js/app.js',
    output: {
        filename: 'assets/bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname), // New
        historyApiFallback: true,
        proxy: {
            '/*': {
                host: 'https://gamaassigment2.firebaseapp.com/'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader', //  SE FALHA EXECUTA ESSE
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: 'url-loder!file-loader'

            }
        ]
    },
    plugins
};