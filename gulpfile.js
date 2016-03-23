'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  DEBUG: false, // change to true to see the funcion name of plugins
  pattern: ['gulp-*', 'gulp.*','*']
});
var config = require('./gulp-tasks/_config.js');
var runSequence = require('run-sequence');

plugins.util.log('### GULP BOILERPLATE ###');

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, config);
}


// if you need you can only "remove" the tasks above 
// commenting the line. There will be no lost for the project
gulp.task('sass:production', getTask('sass-production')); // create a CSS for Production (Minified)
gulp.task('sass:dev', getTask('sass-dev'));   //create a CSS for Development
gulp.task('sass:watch', getTask('sass-watch'));  //a Plugin to Lesson the SCSS changes
gulp.task('js:compress', getTask('js-compress'));  // Compress the Javascript File
gulp.task('js:watch', getTask('js-watch'));     // Watch Javascript Change Files
gulp.task('js:eslint', getTask('js-eslint'));   // validate Javascript and ES6
gulp.task('js:jshint', getTask('js-jshint'));  // validate Javascript and ES6
gulp.task('js:jscs', getTask('js-jscs'));  // validade Javascript 
gulp.task('sprite', getTask('sprite'));  // create Sprite using SpriteSmith
gulp.task('server', ['default'], getTask('server')); //used for Browser Sync and LiveReload
gulp.task('stylelint', getTask('stylelint')); // lint to check the CSS File. Using postcss
gulp.task('imagemin', getTask('imagemin')); // Minify the Image
gulp.task('imagemin-watch', getTask('imagemin-watch'));

// Compile JS
// Please select which JS validate Plugin(s) is better for your Project
// And comment the other not used
gulp.task('compileJS', function(cbFunc) {
  runSequence([
               'js:eslint'
               ,'js:jshint'
               ,'js:jscs'
               ],
               'js:compress',
              cbFunc);
});

// this gulp default is an example/option
// You can change it, adding ou removing tasks
gulp.task('default', [// Compile
                      'sass:dev',
                      'sprite',
                      'compileJS',

                      // Optimization
                      'imagemin',

                      // Watch
                      'sass:watch', 'js:watch', 'imagemin-watch'
                      ]);
