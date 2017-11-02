const gulp = require('gulp');
const path = require('path');
const conf = require('./conf');

const browserSync = require('browser-sync');

const $ = require('gulp-load-plugins')();

gulp.task('inject', ['scripts', 'styles'], () => {
    var injectStyles = gulp.src(path.join(conf.paths.tmp, '/serve/app/**/*.css'), { read: false });

    const injectScripts = gulp.src([path.join(conf.paths.tmp, '/serve/app/**/*.module.js')], {read: false});

    const injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/*.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});