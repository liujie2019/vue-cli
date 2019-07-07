const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// main: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')]
module.exports = {
    mode: 'development',
    entry: {
        // main: path.resolve(__dirname, '../src/index.js')
        main: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[nname].[hash:8].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};