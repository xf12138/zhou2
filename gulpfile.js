var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var server = require('gulp-webserver');

gulp.task('css', function() {
    gulp.src('src/css/*.css')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(autoprefixer({
            browsers: ['last 2 viewsions', 'Android>=4.0']
        }))
        .pipe(gulp.dest('src/css'))
})
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8090,
            open: true
        }))
})