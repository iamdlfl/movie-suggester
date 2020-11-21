const path = require('path');
const fse = require('fs-extra');


const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

let cssConfig = {
    test: /\.css$/i,
    use: [
        'style-loader',
        'css-loader?url=false',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: { plugins: postCSSPlugins }
            }
        }
    ]
}

module.exports = {
    mode: 'development',
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'app')
    },
    module: {
        rules: [
            cssConfig
        ]
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 4000,
        host: '0.0.0.0',
    }
}