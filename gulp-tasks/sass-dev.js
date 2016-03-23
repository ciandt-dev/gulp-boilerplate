'use strict';
//nested, expanded, compact, compressed
var sassOptions = {
  outputStyle: 'expanded',
  includePaths: [
     __dirname + '\\..\\' + 'breakpoint-sass/stylesheets/'
  ]
};

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.styles.src + '*.scss')
    .pipe($.concat(config.filesDist.css.unminfied))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.styles.dest));
  };
};
