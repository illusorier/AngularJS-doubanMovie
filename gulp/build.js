const gulp = require('gulp');
const conf = require('./conf');
const path = require('path');
const del = require('del');

gulp.task('clean', function () {
    return del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('build', ['inject']);