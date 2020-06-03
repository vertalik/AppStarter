const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  // context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev,
  },
  plugins: [
    new VueLoaderPlugin(),
    // new BaseHrefWebpackPlugin({ baseHref: '.' }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      hash: true,
      baseUrl: './'
      // baseUrl: process.env.NODE_ENV == 'development'?'/':'/src/',
      // inject: true,
      // minify: {
      //   collapseWhitespace: isProd,
      // },
      // filename: 'index.html',
      // template: path.resolve(__dirname, './public/index.html'),
      // templateParameters(compilation, assets, options) {
      //   return {
      //     compilation: compilation,
      //     webpack: compilation.getStats().toJson(),
      //     webpackConfig: compilation.options,
      //     htmlWebpackPlugin: {
      //       files: assets,
      //       options: options
      //     },
      //     process,
      //   };
      // },
      // minify: {
      //   collapseWhitespace: true,
      //   removeAttributeQuotes: true,
      //   removeComments: true
      // },
      // nodeModules: false
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './public/img') , to: 'img' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: path.resolve(__dirname, './src'),
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
