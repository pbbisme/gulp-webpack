const path = require('path');
const glob = require("glob");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

function getEntry(globPath, pathDir) {
  var files = glob.sync(globPath);
  var entries = {},
    entry, dirname, basename, pathname, extname;

  for (var i = 0; i < files.length; i++) {
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


const debug = process.env.NODE_ENV !== 'production';
console.log(debug)
var entries = getEntry('src/page/**/index.js', 'src/page/');
var chunks = Object.keys(entries);
console.log("chunks::");
console.log(chunks);
console.log("-----------------------------")
console.log("entries::");
console.log(entries);
var config = {
  entry: entries,// { homeindex: './src/page/home/index.js' },
  output: {
    path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: '/',				//模板、样式、脚本、图片等资源对应的server上的路径
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
        // loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!sass-loader?outputStyle=expanded",
          publicPath: "/dist"
        })
      },
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader'
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader",
          publicPath: "/dist"
        })
      }, {
        test: /\.less$/,
        // loader: 'style-loader!css-loader!less-loader?outputStyle=expanded'
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!less-loader?outputStyle=expanded",
          publicPath: "/dist"
        })
      }, {
        test: /\.html$/,
        loader: "html-loader?-minimize" //避免压缩html,https://github.com/webpack/html-loader/issues/50
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }, {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192&name=imgs/[name].[ext][hash]'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq
      $: 'jquery',
      _: 'lodash'
    }),
    new CommonsChunkPlugin({
      name: "commons.chunk", // 将公共模块提取，生成名为`vendors`的chunk
      chunks: chunks, //提取哪些模块共有的部分
      minChunks: chunks.length // 提取至少3个模块共有的部分
    }),
    // new ExtractTextPlugin('styles/[name].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath

    new ExtractTextPlugin({
      filename: "styles/[name].css",
      disable: false,
      allChunks: true
    }), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
    // new UglifyJsPlugin({ //压缩代码
    //   compress: {
    //     warnings: false
    //   },
    //   except: ['$super', '$', 'exports', 'require'] //排除关键字
    // }),
    new webpack.HotModuleReplacementPlugin() //热加载
  ]
};


var pages = Object.keys(getEntry('src/page/**/*.html', 'src/page/'));
console.log("pages::" + pages);
pages.forEach(function (pathname) {
  var conf = {
    filename: 'page/' + pathname + '.html', //生成的html存放路径，相对于path
    template: './viewtemplate/' + pathname + '.html', //html模板路径
    // template: './src/page/home/index.html', //html模板路径
    // template: './src/page/home/index.html', //html模板路径

    inject: false, //js插入的位置，true/'head'/'body'/false
		/*
		 * 压缩这块，调用了html-minify，会导致压缩时候的很多html语法检查问题，
		 * 如在html标签属性上使用{{...}}表达式，很多情况下并不需要在此配置压缩项，
		 * 另外，UglifyJsPlugin会在压缩代码的时候连同html一起压缩。
		 * 为避免压缩html，需要在html-loader上配置'html?-minimize'，见loaders中html-loader的配置。
		 */
    minify: { //压缩HTML文件
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    }
  };
  if (pathname in config.entry) {
    // conf.favicon = path.resolve(__dirname, 'src/imgs/favicon.ico');
    conf.chunks = ['commons.chunk', pathname];
    conf.inject = 'body';
    conf.hash = true;
  }
  config.plugins.push(new HtmlWebpackPlugin(conf));
});


module.exports = config;