// gulpfile.js for disconnect app

// create variables to hold the required node mobules
var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var nodemon 	= require('gulp-nodemon')
var sass 		= require('gulp-sass');


// define style paths
var sassFiles 	= 'assets/sass/**/*.scss',
    cssDest 	= 'public/css/';

// Use browser-sync to refresh browser every time a change to the watched files is detected
gulp.task('default', ['server'], function(){

});

gulp.task('browersync', function(){
  browserSync.init({
      proxy: "http://localhost:8080"
    });
});

//spin up a server for your app, kinda a big deal
gulp.task('server', ['watch'], function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('styles', function(){
  // define location of source files
  gulp.src(sassFiles)
      // show errors if any are returned
      .pipe(sass().on('error', sass.logError))
      // save freshly baked css to defined location
      .pipe(gulp.dest(cssDest));
});

//create watch task to compile scss every time there is a change
gulp.task('watch', function(){
  // define location and task to run when changes are noted
  gulp.watch(sassFiles,['styles']);
  //gulp.watch("views/*.ejs").on('change', browserSync.reload);
  //gulp.watch("public/css/*.css").on('change', browserSync.reload);
});