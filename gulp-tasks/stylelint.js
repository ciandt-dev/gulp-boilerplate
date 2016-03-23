'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.styles.src + '/**/*.scss')
    .pipe(
      $.postcss([
          //Processors Arrat
          $.stylelint(),
          $.postcssReporter({
            clearMessages: true,
          })
        ], {
          syntax: $.postcssScss
        }
      )
    );
  };
};
