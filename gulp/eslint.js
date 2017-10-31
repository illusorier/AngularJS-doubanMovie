const gulp = require('gulp');
const path = require('path');
const conf = require('./conf');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => {
    return gulp.src(['src/app/**/*.js', '!src/app/index.module.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});