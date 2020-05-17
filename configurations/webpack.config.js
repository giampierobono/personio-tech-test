/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const postcssNormalize = require('postcss-normalize');

const options = { DEV_MODE: process.env.ENV !== 'production' };

module.exports = (basePath, libraryName) => {
  return {
    mode: options.DEV_MODE ? 'development' : 'production',
    entry: {
      [libraryName]: basePath.src + '/index.ts',
    },
    output: {
      path: basePath.dist,
      filename: '[name].js',
      libraryTarget: 'umd',
    },
    devtool: options.DEV_MODE ? 'cheap-source-map' : false,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.ts$|\.tsx$/,
          exclude: path.resolve(basePath.src, '..', 'node_modules'),
          loader: 'ts-loader',
        },
        {
          test: /\.s(a|c)ss$/,
          loader: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 3,
                sourceMap: options.DEV_MODE,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                  postcssNormalize(),
                ],
                sourceMap: options.DEV_MODE,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: options.DEV_MODE,
              },
            },
          ],
          sideEffects: true,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      modules: [path.resolve(basePath.src), 'node_modules'],
    },
    plugins: [
      new WebpackBuildNotifierPlugin({
        title: libraryName,
      }),
      new webpack.IgnorePlugin(/spec\.ts$/),
    ],
  };
};
