const path = require("path");
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = (basePath, libraryName) => {
  const options = { DEV_MODE: process.env.ENV !== "production" };

  return {
    mode: options.DEV_MODE ? "development" : "production",
    entry: {
      [libraryName]: basePath.src + "/index.ts",
    },
    output: {
      path: basePath.dist,
      filename: "[name].js",
      libraryTarget: "umd",
    },
    devtool: options.DEV_MODE ? "cheap-source-map" : false,
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.ts$|\.tsx$/,
          exclude: path.resolve(basePath.src, "..", "node_modules"),
          loader: "ts-loader",
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: options.DEV_MODE,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss"],
      modules: [path.resolve(basePath.src), "node_modules"],
    },
    plugins: [
      new WebpackBuildNotifierPlugin({
        title: libraryName,
      }),
      new webpack.IgnorePlugin(/spec\.ts$/),
    ],
  };
};
