var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = environment => ({
  entry: './src/index.js',
  mode: environment.mode,
  module: {
    rules: [
	 	  {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
	  ]
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },
  devServer: {
    historyApiFallback: true, //Prevents the Content Security Policy error with default-src fallback during reloading Page
    hot: true,
  },
  plugins: [
	  new HtmlWebpackPlugin({
		  template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
      },
	  })
  ],
});