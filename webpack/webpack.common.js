const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpack = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    hot: true,
    compress: true,
    port: 8081,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        // should use babel-loader for all ts js tsx and jsx files
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        // should use style-loader and css-loader for all css files
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // v5 supports image loaders out of box
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new CopyWebpack({
      patterns: [{ from: "sourcefolder", to: "destinationfolder", noErrorOnMissing: true }],
    }),
  ],
};
