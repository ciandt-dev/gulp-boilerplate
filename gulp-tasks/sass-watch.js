'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.styles.src + '/**/*.scss')
    .pipe(
      $.watch(config.paths.styles.src + '/**/*.scss').on('change', function(file) {
        $.util.log('Changed: ' + file);
        $.runSequence(['stylelint','sass:dev']);
      }).on('add', function(file) {
        $.util.log('Added: ' + file);
        $.runSequence(['stylelint','sass:dev']);
      }).on('unlink', function(file) {
        $.util.log('Removed: ' + file);
        $.runSequence(['stylelint','sass:dev']);
      })
    )


    // Create LiveReload server
    $.livereload.listen();

    // Watch any files in dist/, reload on change
    $.watch([config.paths.styles.dest + '**']).on('change', $.livereload.changed);
  };
};
