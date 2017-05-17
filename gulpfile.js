var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plugins = require('gulp-load-plugins')();
var sass = require('gulp-sass');
var webpack = require('webpack');
var runSequence = require('run-sequence').use(gulp);
var webpackConfig = require('./webpack.config.js')
var gls = require('gulp-live-server');

var WebpackDevServer = require("webpack-dev-server");

/**
 * 弃用
 */
gulp.task("webpack-dev-server", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    new WebpackDevServer(webpack(myConfig), {
        contentBase: "./dist/",
        colors: true, //终端中输出结果为彩色
        inline: true //实时刷新
    }).listen(8088, "localhost", function (err) {
        if (err) {
            console.error("webpack-dev-server", err);
        } else {
            console.log("http://localhost:8088/webpack-dev-server/index.html");
        }
        // gutil.log("[webpack-dev-server]", "http://localhost:8088/webpack-dev-server/index.html");
    });
});
/**
 * 弃用
 */
gulp.task("build", function (callback) {
    return runSequence("cleanDist", "builTemplate", "webpack", callback);
})

/**
 * 编译项目组件
 */
gulp.task("webpack", function (callback) {
    var myConfig = Object.create(webpackConfig);
    return webpack(myConfig, function (err, stats) {
        if (err) { console.error("webpack", err); } else {
            console.log("Ok");
        }
        callback();
    });
});

/**
 * 编译第三方包的sass 
 */
gulp.task('sass', function () {
    // bootstrap compilation
    var CSS_PATCH = "./src/static/css";
    gulp.src(['./src/static/sass/global/*.scss','./src/static/sass/bootstrap.scss','./src/static/sass/select2-bootstrap.min.scss'])
        .pipe(plugins.changed('./assets/global/plugins/bootstrap/css/'))
        .pipe(plugins.sass())
        .pipe(gulp.dest(CSS_PATCH))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest(CSS_PATCH));

    // select2 compilation using bootstrap variables
    gulp.src('./src/static/sass/select2-bootstrap.min.scss')
        .pipe(plugins.sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(CSS_PATCH))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest(CSS_PATCH));

})


gulp.task("watchTask", function (callback) {
    return runSequence("sass", "webpack", callback);
})
gulp.task('serve', function () {
    //1. serve at custom port
    var server = gls.static('dist', 8888);
    server.start();
    //sass 静态文件编译
    gulp.watch("./src/static/sass/**/*.scss", ["watchTask"]);
    //webpack模块编译
    gulp.watch(["./src/**/*.(js|css|scss|html)", "./src/**/*.html"], ["webpack"]);
})


//默认命令
gulp.task('default', ['watch'])