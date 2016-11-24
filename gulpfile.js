var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
     del = require('del');


gulp.task('concatScripts', function() {
  'use strict';
  return gulp.src([
      'main/static/javascripts/jquery-3.1.1.js',
      'main/static/javascripts/particle-network.js',
      'main/static/javascripts/modernizr.js',
      'main/static/javascripts/main.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('main/static/javascripts'));
});


gulp.task('minifyScripts', ['concatScripts'], function() {
  'use strict';
  return gulp.src('main/static/javascripts/scripts.js')
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('main/static/javascripts'));
});


gulp.task('compileSass', function() {
  'use strict';
  return gulp.src('main/static/stylesheets/scss/application.scss')
    .pipe(sass())
    .pipe(gulp.dest('main/static/stylesheets/css'));
});


gulp.task('watchFiles', function() {
  'use strict';
  gulp.watch('main/static/stylesheets/scss/**/*.scss', ['compileSass']);
  gulp.watch('main/static/javascripts/*.js', ['concatScripts']);
});


gulp.task('clean', function() {
  'use strict';
  del(['dist',
       'main/static/stylesheets/css/application.css*',
       'main/static/javascripts/scripts*.js*']);
});


gulp.task('build', ['minifyScripts', 'compileSass'], function() {
  'use strict';
  return gulp.src(['main/static/stylesheets/css/**',
                   'main/static/javascripts/scripts.min.js'], { base: './' })
                   .pipe(gulp.dest('dist'));
});


gulp.task('serve', ['watchFiles']);


gulp.task('default', ['clean'], function() {
  'use strict';
  gulp.start('build');
});
