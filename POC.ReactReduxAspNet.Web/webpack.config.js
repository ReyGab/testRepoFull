var webpack = require('webpack');
var path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true
    },

    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:9090/',
        'webpack/hot/only-dev-server',
        './app'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'app'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2,plugins[]=transform-decorators-legacy']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};