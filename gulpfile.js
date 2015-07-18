var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');


gulp.task('default', function () {

});


gulp.task('run', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*/*.js", browserSync.reload);
    gulp.watch("./*/*.html", browserSync.reload);
});

gulp.task('less', function () {
    return gulp.src('./src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build'));
});