// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer= require('gulp-autoprefixer');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var cache = require('gulp-cache');
var paths = {
    scss: './_assets/scss/base/*.scss'
};
var sass = require('gulp-sass');

var gulp = require('gulp');

var connect = require('gulp-connect');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/slider.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass(
            {
                style: 'expanded',
                errLogToConsole: false,
                onError: function(err) {
                    return notify().write(err);
                }
            }
        ))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({ compatibility: 'ie8', noAdvanced: true }))
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
    return gulp.src(
            'js/slider.js'
        )
        .pipe(rename('slider.min.js'))
        .pipe(gulp.dest('js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/slider.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'connect', 'watch']);
