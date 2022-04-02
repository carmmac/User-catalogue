const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevMode = process.env.NODE_ENV === `development`;
const isProdMode = process.env.NODE_ENV === `production`;

const cssRegex = /\.s?css$/;
const cssModuleRegex = /\.module\.s?css$/;
const fontRegex = /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "build"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), "public"),
    },
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  plugins: [
    ...(isDevMode
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css",
          }),
          new HtmlWebpackPlugin(
            Object.assign(
              {},
              {
                inject: true,
                template: path.resolve(process.cwd(), "public/index.html"),
                favicon: path.resolve(process.cwd(), "public/favicon.png"),
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
            )
          ),
        ]),
  ],
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
  devtool: "source-map",
};
