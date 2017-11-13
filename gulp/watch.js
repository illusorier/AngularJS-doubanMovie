const gulp = require('gulp');
const path = require('path');
const conf = require('./conf');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], () => {
    gulp.watch(path.join(conf.paths.src, 'app/**/*.js'), ['inject-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });
});