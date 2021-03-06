const gulp = require('gulp');
const conf = require('./conf');
const path = require('path');

const browserSync = require('browser-sync');
const browserSyncSpa = require('browser-sync-spa');

const proxyMiddleware = require('http-proxy-middleware');

gulp.task('serve', ['build', 'watch'], function () {
    browserSync.init({
        server: {
            staticPath: '/',
            baseDir: path.join(conf.paths.tmp, '/serve'),
            browser: "google chrome",
            middleware: [proxyMiddleware('/v2', {
                target: 'https://api.douban.com',
                changeOrigin: true,
                logLevel: 'debug'
            })]
        }
    })

    browserSync.use(browserSyncSpa({
        selector: '[ng-app]'// Only needed for angular apps
    }));

});