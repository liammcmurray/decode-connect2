// gulpfile.js for disconnect app

// create variables to hold the required node mobules
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon')
var sass = require('gulp-sass');


// define style paths
var sassFiles = 'assets/sass/**/*.scss',
    cssDest = 'public/css/';


gulp.task('default', ['browserSync'], function(){
});


gulp.task('browserSync', ['server'], function() {
  browserSync.init({
    proxy: "http://localhost:8080"
  });
});

//spin up a server for your app, kinda a big deal
gulp.task('server', ['styles'], function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('styles', ['watch'], function(){
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
});



// Junk and in dev below
gulp.watch("app/*.html").on('change', browserSync.reload);

refer to :https://browsersync.io/docs/gulp

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
  });
});
gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'app.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});


