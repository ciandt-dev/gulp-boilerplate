'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.scripts.src + '*.js')
    .pipe($.concat(config.filesDist.js.minified))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.scripts.dest));
  };
};
