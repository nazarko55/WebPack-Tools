const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production"
  const config = {
    entry: './src/scripts/index.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.s?css$/
          use: [
            isProduction
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            'css-loader',
            'sass-loader']
        },
        {
          test: /.js$/,
          use: ['babel-loader']
        },
        {
          test: /.(jpg|png)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: '[name].[ext]',
                outputPath: 'images'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
      hot: true,
      port: 9000
    }
  };

  if (isProduction) config.plugins.push(new MiniCssExtractPlugin({
    filename: '[name].css'
  }));

  return config
}