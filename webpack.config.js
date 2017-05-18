const path = require('path');
const glob = require("glob");
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let WebpackDevServer = require("webpack-dev-server");
let CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

function getEntry(globPath, pathDir) {
  let files = glob.sync(globPath);
  let entries = {},
    entry, dirname, basename, pathname, extname;

  for (let i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.normalize(path.join(dirname, basename));
    pathDir = path.normalize(pathDir);
    if (pathname.startsWith(pathDir)) {
      pathname = pathname.substring(pathDir.length)
    }
    pathname = pathname.replace(/\\/g, "/")
    entries[pathname] = ['./' + entry];
  }
  return entries;
}

let publishPath = "dist";
const production = process.env.NODE_ENV === 'production';
if (production) {
  publishPath = "build"
}

console.log("process.env.NODE_ENV::" + process.env.NODE_ENV)
let entries = getEntry('src/page/**/index.js', 'src/page/');
let chunks = Object.keys(entries);
let config = {
  entry: entries,// { homeindex: './src/page/home/index.js' },
  output: {
    path: path.join(__dirname, publishPath), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    // publicPath: '/',				//模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'js/[name].js',			//每个页面对应的主js的生成配置
  },
  // entry: {
  //   home1: "./src/page/home/index.js",
  //   home2: "./src/page/home2/index.js"
  // },
  // output: {
  //   filename: "[name].entry.js",
  //   publicPath: '/',
  //   path: path.join(__dirname, 'dist'),
  // },
  module: {
    rules: [ //加载器
      {
        test: /\.scss/,
        // use: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader",
            options: {
              includePaths: ["src/static/sass"]
            }
          }],
          publicPath: publishPath
        })
      },
      {
        test: /\.css$/,
        // use: 'style-loader!css-loader'
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: publishPath
        })
      }, {
        test: /\.less$/,
        // use: 'style-loader!css-loader!less-loader?outputStyle=expanded'
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!less-loader?outputStyle=expanded",
          publicPath: publishPath
        })
      }, {
        test: /\.html$/,
        // use: [{
        //   use: production ? 'html-loader?attrs=img:src img:data-src&interpolate&minimize' : 'html-loader?attrs=img:src img:data-src&interpolate&-minimize'
        // }]
        use: "html-loader?interpolate&minimize=false"
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=static/fonts/[name].[ext]'
      }, {
        test: /\.(png|jpe?g|gif)$/,
        use: 'url-loader?limit=8192&name=static/imgs/[name].[ext]?[hash]'
      }
    ]
  },
  resolve: {
    alias: {
      _components: path.resolve(__dirname, 'src/components/'),
      _static: path.resolve(__dirname, 'src/static/')
    },
  },
  plugins: [
    new CopyWebpackPlugin([{
      toType: "dir",
      from: __dirname + '/src/static',
      to: "static",
      ignore: ["**/*.scss", "**/*.less",]
    }]),
    new webpack.ProvidePlugin({ //加载jq
      // $: 'jquery',
      // _: 'lodash' 
    }),
    new CommonsChunkPlugin({
      name: "commons.chunk", // 将公共模块提取，生成名为`commons`的chunk
      chunks: chunks, //提取哪些模块共有的部分
      minChunks: chunks.length // 提取模块共有的部分
    }),
    // new ExtractTextPlugin('styles/[name].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath

    new ExtractTextPlugin({
      filename: "styles/[name].css",
      disable: false,
      allChunks: true
    }), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
    production ? new UglifyJsPlugin({ //压缩代码
      compress: {
        warnings: false
      },
      // beautify: true,
      except: ['$super', '$', 'exports', 'require'] //排除关键字
    }) : function () { },
    new webpack.HotModuleReplacementPlugin(), //热加载

    // new WebpackDevServer(webpack(myConfig), {
    //   contentBase: "./dist/",
    //   colors: true, //终端中输出结果为彩色
    //   inline: true //实时刷新
    // }).listen(8088, "localhost", function (err) {
    //   if (err) {
    //     console.error("webpack-dev-server", err);
    //   } else {
    //     console.log("http://localhost:8088/webpack-dev-server/index.html");
    //   }
    //   // gutil.log("[webpack-dev-server]", "http://localhost:8088/webpack-dev-server/index.html");
    // })
  ],
  devServer: {
    contentBase: publishPath,
    port: 8088,
    colors: true, //终端中输出结果为彩色
    inline: true, //实时刷新
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/page/home/index.html' },
        { from: /^\/s/, to: '/webpack-dev-server/page/home/index.html' },
      ]
    }

  }
};


let pages = Object.keys(getEntry('src/page/**/*.html', 'src/page/'));
console.log("pages::" + pages);
pages.forEach(function (pathname) {
  let conf = {
    filename: 'page/' + pathname + '.html', //生成的html存放路径，相对于path
    template: './src/page/' + pathname + '.html', //html模板路径
    // template: './src/page/home/index.html', //html模板路径
    // template: './src/page/home/index.html', //html模板路径

    inject: false, //js插入的位置，true/'head'/'body'/false
		/*
		 * 压缩这块，调用了html-minify，会导致压缩时候的很多html语法检查问题，
		 * 如在html标签属性上使用{{...}}表达式，很多情况下并不需要在此配置压缩项，
		 * 另外，UglifyJsPlugin会在压缩代码的时候连同html一起压缩。
		 * 为避免压缩html，需要在html-loader上配置'html?-minimize'，见loaders中html-loader的配置。
		 */
    minify: false
  }; 
  if (pathname in config.entry) {
    // conf.favicon = path.resolve(__dirname, 'src/imgs/favicon.ico');
    conf.chunks = ['commons.chunk', pathname];
    conf.inject = 'body';
    conf.hash = true;
  }
  config.plugins.push(new HtmlWebpackPlugin(conf));
});
config.plugins.push(
  new HtmlWebpackInlineSourcePlugin()
);
module.exports = config;