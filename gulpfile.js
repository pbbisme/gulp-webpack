var template = require('gulp-art-include');
var gulp = require('gulp');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

var webpack = require('webpack');
var runSequence = require('run-sequence').use(gulp);
var webpackConfig = require('./webpack.config.js')

var WebpackDevServer = require("webpack-dev-server");
gulp.task("webpack-dev-server", function (callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    new WebpackDevServer(webpack(myConfig), {
        contentBase: "./dist/",
        colors: true, //终端中输出结果为彩色
        inline: true //实时刷新
    }).listen(8088, "localhost", function (err) {
        if (err) console.error("webpack-dev-server", err);
        console.log("http://localhost:8088/webpack-dev-server/index.html");
        // gutil.log("[webpack-dev-server]", "http://localhost:8088/webpack-dev-server/index.html");
    });
});

gulp.task('cleanDist', function (cb) {
    return gulp.src(["dist/", "viewtemplate/"])
        .pipe(clean());
});
gulp.task('builTemplate', function (cb) {
    return gulp.src("src/page/**/*.html")
        .pipe(template())
        .pipe(gulp.dest('viewtemplate'));
});

gulp.task("webpack", function (callback) {
    var myConfig = Object.create(webpackConfig);
    return webpack(myConfig, function (err, stats) {
        if (err) console.error("webpack-dev-server", err);
        console.log("http://localhost:8088/webpack-dev-server/index.html");
        callback();
    });
});

gulp.task("build", function (callback) {
    runSequence("cleanDist", "builTemplate", "webpack", callback);
})

gulp.task("watchTask", function (callback) {
    runSequence("builTemplate", "webpack", callback);
})


gulp.task('watch', function () {
    watch(["src/**/*.html"], batch(function (events, done) {
        gulp.start('watchTask', done);
    }));
});

//默认命令
gulp.task('default', ['watch', "webpack-dev-server"])