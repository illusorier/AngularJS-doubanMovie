const gulp = require('gulp');
const conf = require('./conf');
const path = require('path');

const browserSync = require('browser-sync');
const browserSyncSpa = require('browser-sync-spa');

gulp.task('serve', function () {
    browserSync.init({
        server: {
            staticPath: '/',
            baseDir: path.join(conf.paths.tmp, '/serve'),
            browser: "google chrome"
        }
    })

    browserSync.use(browserSyncSpa({
        selector: '[ng-app]'// Only needed for angular apps
    }));

});