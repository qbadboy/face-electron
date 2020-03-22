const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(src) {
  return path.resolve(__dirname, src);
}

module.exports = {
  entry: {
    main: './src/page/main.js',
    vendors: ['vue']
  },
  output: {
    filename: '[name].js',
    path: resolve('../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@components': resolve('../src/page/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader'
        ],
        exclude: /node_module/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'learning electron',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('../src/public'),
        to: resolve('../dist')
      }
    ])
  ],
  node: {
    fs: 'empty'
  }
};
