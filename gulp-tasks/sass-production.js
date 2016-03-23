'use strict';
//nested, expanded, compact, compressed
var sassOptions = {
  outputStyle: 'compressed',
  includePaths: [
     __dirname + '\\..\\' + 'breakpoint-sass/stylesheets/'
  ]
};

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.styles.src + '*.scss')
    .pipe($.concat(config.filesDist.css.minified))
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(gulp.dest(config.paths.styles.dest));
  };
};
