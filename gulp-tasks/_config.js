/* gulp-config.js */
'use strict';

module.exports = {
  basePaths: {
    node_modules: './node_modules/',
    src: './',
    dest: './dist/'
  },
  paths: {
    scripts: {
      src: './src/js/',
      dest: './dist/js/'
    },
    styles: {
      src: './src/sass/',
      dest: './dist/css/',
      abstractions: './src/sass/abstractions/'
    },
    images: {
      src: './src/img/',
      dest: './dist/img/'
    },
    sprite: {
      src: './src/img/sprite/',
      src2x: './dist/img/sprite2x/'
    },
  },
  spriteConfig: {
    imgName: 'sprite.png',
    retinaImgName: 'sprite-2x.png',
    cssName: '_sprite.scss',
  },
  filesDist: {
    css: {
      unminfied : 'gulp-boilerplate.css',
      minified : 'gulp-boilerplate.min.css'
    },
    js: {
      unminfied : 'gulp-boilerplate.js',
      minified : 'gulp-boilerplate.min.js'
    }
  }
};
