const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDevMode = process.env.NODE_ENV === `development`;
const isProdMode = process.env.NODE_ENV === `production`;

const cssRegex = /\.s?css$/;
const cssModuleRegex = /\.module\.s?css$/;
const fontRegex = /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i;

const terserPluginOptions = {
  terserOptions: {
    format: {
      comments: false,
    },
  },
  extractComments: false,
};
const miniCssExtractPluginOptions = {
  filename: "[name].css",
  chunkFilename: "[name].css",
};
const htmlWebpackPluginOptions = Object.assign(
  {},
  {
    inject: true,
    template: path.resolve(__dirname, "public/index.html"),
    favicon: path.resolve(__dirname, "public/favicon.png"),
  },
  isProdMode
    ? {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }
    : undefined
);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    open: true,
    port: isDevMode ? 1337 : 8088,
    historyApiFallback: true,
  },
  performance: {
    maxAssetSize: 1024 * 100 * 5,
    maxEntrypointSize: 1024 * 100 * 5,
  },
  optimization: {
    minimize: isProdMode,
    minimizer: [
      new TerserPlugin(terserPluginOptions),
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [].concat(
    isDevMode
      ? []
      : [
          new MiniCssExtractPlugin(miniCssExtractPluginOptions),
          new HtmlWebpackPlugin(htmlWebpackPluginOptions),
        ]
  ),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[name]__[local]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: fontRegex,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: isDevMode ? "source-map" : false,
};
