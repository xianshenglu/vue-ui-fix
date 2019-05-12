const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browsers = require('../package.json').browserslist
exports.default = function () {
  return gulp
    .src('../packages/styles/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('../lib/components/'))
}
