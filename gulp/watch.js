const gulp = require('gulp');
const path = require('path');
const conf = require('./conf');

gulp.task('watch', ['inject'], () => {
    gulp.watch(path.join(conf.paths.src, 'app/**/*.js'), ['inject-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss')
    ], ['inject-reload'])
});