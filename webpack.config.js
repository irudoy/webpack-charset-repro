const EncodingPlugin = require('webpack-encoding-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new EncodingPlugin({
            encoding: 'cp1251',
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};