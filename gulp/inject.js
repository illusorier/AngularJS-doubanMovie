const gulp = require('gulp');
const path = require('path');
const conf = require('./conf');

const $ = require('gulp-load-plugins')();

gulp.task('inject', ['scripts'], () => {
    const injectScripts = gulp.src([path.join(conf.paths.tmp, '/serve/app/**/*.module.js')], {read: false});

    const injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/*.html'))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});