const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const babel = require('gulp-babel');

const $ = require('gulp-load-plugins')();

const sources = [ path.join(conf.paths.src, 'app/index.module.js') ];

function buildScripts() {
    return gulp.src(sources)
        .pipe(babel())
        .pipe($.browserify())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', () => {
    return buildScripts();
});