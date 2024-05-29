const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function comprimeSass(){
    return gulp.src('./src/styles/*.scss').pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist/styles'));
}

function comprimeImage(){
    return gulp.src('./src/images/**/*').pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}
function comprimeJs(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}


exports.default = gulp.series(comprimeSass, comprimeImage, comprimeJs);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',{ignoreInitial: false},gulp.series(comprimeSass));
}