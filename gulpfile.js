const fs = require('fs');
const gulp = require('gulp');

fs.readdirSync('./gulp').filter(function (file) {
    return (/\.(js|coffee|ts)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

gulp.task('default', ['scripts']);