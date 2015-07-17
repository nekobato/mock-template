var gulp = require('gulp');

// js
var webpack = require('webpack-stream');

gulp.task('js', function() {
  return gulp.src('src/main.js')
    .pipe(webpack({
      output: {
        filename: 'script.js',
      }
    }))
    .pipe(gulp.dest('./'));
});

// css
var please = require('gulp-pleeease');
var concat = require('gulp-concat');

gulp.task('css', function () {
  gulp.src('./src/*.less')
  .pipe(please({
    less: true,
    minifier: false,
    browsers: ["last 2 versions"]
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./dest'));
});

// watch
gulp.task('watch', function() {
  gulp.watch('./src/*.less', ['css']);
  gulp.watch('./src/*.js',   ['js']);
});

// task
gulp.task('default', ['watch']);
