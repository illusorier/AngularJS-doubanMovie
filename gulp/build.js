const gulp = require('gulp');
const conf = require('./conf');
const path = require('path');
const del = require('del');

const $ = require('gulp-load-plugins')();

gulp.task('partials', () => {
    return gulp.src([path.join(conf.paths.src, '/app/**/*.html')])
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'ng1Dashboard',
            root: 'app'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/serve/app'));
});

gulp.task('html', ['inject', 'partials'], function () {
    const partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/serve/app/templateCacheHtml.js'), { read: false });
    const partialsInjectOptions = {
        starttag: '<!-- inject:partials -->',
        ignorePath: path.join(conf.paths.tmp, '/serve'),
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
        .pipe($.inject(partialsInjectFile, partialsInjectOptions))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('clean', () => {
    return del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('build', ['html']);