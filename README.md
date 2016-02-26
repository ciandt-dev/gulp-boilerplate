# Gulp Boilerplate ![Version](https://img.shields.io/badge/Version-1.0.4-green.svg)
[![Build Status](https://travis-ci.org/ciandt-dev/gulp-boilerplate.svg)](https://travis-ci.org/ciandt-dev/gulp-boilerplate)
[![Dependency Status](https://david-dm.org/ciandt-dev/gulp-boilerplate.svg)](https://david-dm.org/ciandt-dev/gulp-boilerplate/#info=dependencies&view=table)
[![devDependency Status](https://david-dm.org/ciandt-dev/gulp-boilerplate/dev-status.svg)](https://david-dm.org/ciandt-dev/gulp-boilerplate/#info=devDependencies&view=table)
> A simple way to start your project using Gulp.

## Requires
* [Node.JS](http://nodejs.org/)
* [Gulp](http://gulpjs.com)

## Quick Start

Clone the git repo and run NPM

``` bash
git clone https://github.com/ciandt-dev/gulp-boilerplate.git
cd gulp-boilerplate
npm test
```

If Test get succeed then run npm install, otherwise you can get some error logs on installation process.

``` bash
npm install
```


## Run
``` bash
gulp
```

### Example

Run `server` task, to start browser-sync and watch for `sass:dev` and `js:compress`:
``` bash
gulp server
```

## Modules list
* Check [package.json](package.json)

## Only Windows users

Only for Windows users who want to delete/remove the bigger ```node_modules``` folder can do this with only two commands.

To install, try this:
```bash
npm install rimraf -g
```

In the root where is ```node_modules```, try:
```bash
rimraf node_modules
```

## Contributing :wrench:
We have some advice if you want to contribute with us. If you are in doubt about GitHub flow, we also include some tips there. [Check it](https://github.com/ciandt-dev/gulp-boilerplate/blob/master/CONTRIBUTING.md) and contribute.

## Stay up-to-date :bulb:
[Check GitHub documentation.](https://github.com/ciandt-dev/gulp-boilerplate/blob/master/CONTRIBUTING.md#updating-your-fork)

## License

The code is available under the [MIT License](LICENSE.md).
