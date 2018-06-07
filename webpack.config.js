var CompressionPlugin = require('compression-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var webpack = require("webpack");

module.exports = {
   context: __dirname,
   entry: [ path.resolve(__dirname, 'src/index.js') ],
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.min.js',
      publicPath: path.resolve(__dirname, 'public')
   },

   module: {
      loaders: [
         {
            test: /\.(png|jpg)$/,
            loader: "url-loader?limit=100000"
         },
         {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            loader: "file-loader"
         }
      ],
      rules : [
         {
            test: /\.js$|.jsx$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'env']
            }
         },
         {
            test: /\.scss$|\.css$/,
            loader: 'style-loader!css-loader!sass-loader',
            exclude: /node_modules/
         },
         {
            test: /bootstrap.css$/,
            loader: 'style-loader!css-loader!sass-loader'
         },
         {
            test: /\.(png|jpg)$/,
            loader: "url-loader?limit=100000"
         },
         {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            loader: "file-loader?limit=100000"
         },
         {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
         },
         {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
         },
         {
            test: /\.md$/,
            loader: 'raw-loader'
         },
         {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader'
         },
         {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
         ["~"]: path.resolve(__dirname, "src")
      }
   },
   plugins: [
      new ExtractTextPlugin({
         filename: 'app.css',
         allChunks: true
      }),
      new webpack.ProvidePlugin({
         jQuery: 'jquery',
         $: 'jquery',
         jquery: 'jquery',
         'window.jQuery': 'jquery',
         Tether: 'tether'
      }),
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
      })/*,
      new webpack.optimize.UglifyJsPlugin(), //minify everything
      new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
      new CompressionPlugin({
         asset: "[path].gz[query]",
         algorithm: "gzip",
         test: /\.js$|\.css$|\.html$|\.jsx$|\.scss$/,
         threshold: 10240,
         minRatio: 0.8
      })*/
   ],
   watchOptions: {
        poll: true
    },
   devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      contentBase: path.resolve(__dirname)
   }
}
