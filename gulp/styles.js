const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');

const $ = require('gulp-load-plugins')();

const browserSync = require('browser-sync');

gulp.task('styles', () => {
    return buildStyles();
});

gulp.task('styles-reload', ['styles'], () => {
    return buildStyles()
        .pipe(browserSync.stream());
});

let buildStyles = function () {
    let injectFiles = gulp.src([
        path.join(conf.paths.src, 'app/**/*.scss'),
        path.join('!' + conf.paths.src, 'app/index.scss')
    ], {read: false});

    let injectOptions = {
        transform: function(filePath) {
            filePath = filePath.replace(conf.paths.src + '/app/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/app/index.scss'))
        .pipe($.inject(injectFiles, injectOptions))
        .pipe($.sass())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
};