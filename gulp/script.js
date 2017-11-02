const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const babel = require('gulp-babel');

const $ = require('gulp-load-plugins')();

const sources = [path.join(conf.paths.src, 'app/index.module.js')];

function buildScripts() {
    return gulp.src(sources)
        .pipe($.browserify({ transform: ['babelify'] }))
        // .pipe($.uglify())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('scripts', ['eslint'], () => {
    return buildScripts();
});

gulp.task('scripts:watch', ['scripts'], () => {
    gulp.watch(path.join(conf.paths.src, 'app/**/*.js'), ['scripts', 'inject-reload']);
});
