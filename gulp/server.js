const gulp = require('gulp');
const conf = require('./conf');
const path = require('path');

const browserSync = require('browser-sync');

gulp.task('serve', function () {
    browserSync.init({
        server: {
            staticPath: '/',
            baseDir: path.join(conf.paths.tmp, '/serve'),
            browser: "google chrome"
        }
    })
});