var template = require('gulp-art-include');
var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('b', function () {
    gulp.src("src/page/**/*.html")
        .pipe(template())
        .pipe(gulp.dest('viewtemplate'))
        // .pipe(webpack());//这里一次报错
});