const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 3002,
        historyApiFallback: {
            index: 'index.html',
        },
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true
    }
});


