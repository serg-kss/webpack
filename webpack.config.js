const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin()],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            
        ]
    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.css'],   
    },
}