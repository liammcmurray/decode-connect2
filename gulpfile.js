// gulpfile.js
/*jslint node: true */
"use strict";

// create variables to hold the required node mobules
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');


// define style paths
var sassFiles = 'assets/sass/**/*.scss',
    cssDest = 'public/css/';

// Serve app locally
gulp.task('default', ['watch'], function () {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('styles', function () {
  // define location of source files
    gulp.src(sassFiles)
        // show errors if any are returned
        .pipe(sass().on('error', sass.logError))
        // save freshly baked css to defined location
        .pipe(gulp.dest(cssDest));
});

//create watch task to compile scss every time there is a change
gulp.task('watch', function () {
    // define location and task to run when changes are noted
    gulp.watch(sassFiles, ['styles']);
});

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

//gulp.task('sass', function () {
//    return gulp.src('scss/*.scss')
//                .pipe(sass())
//                .pipe(gulp.dest('css'))
//                .pipe(bs.reload({stream: true}));
//});

//gulp.task('watch', ['browser-sync'], function () {
//    gulp.watch("scss/*.scss", ['sass']);
//    gulp.watch("*.html").on('change', bs.reload);
//});