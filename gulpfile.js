const fs = require('fs');
const gulp = require('gulp');

fs.readdirSync('./gulp').filter((file) => {
    return (/\.(js|coffee|ts)$/i).test(file);
}).map((file) =>{
    require('./gulp/' + file);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});