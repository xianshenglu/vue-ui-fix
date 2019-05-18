const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browsers = require('../package.json').browserslist
const rename = require('gulp-rename')

exports.default = function () {
  return gulp
    .src('../packages/styles/!(index).scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers
      })
    )
    .pipe(cleanCSS())
    .pipe(
      rename(path => {
        path.dirname += '/' + path.basename
        path.basename = 'index'
      })
    )
    .pipe(gulp.dest('../lib/components/'))
}
