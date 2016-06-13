var gulp = require('gulp');
var uglify=require("gulp-uglify");
var cssmin = require('gulp-minify-css');
var cssver = require('gulp-make-css-url-version'); 
/**
 * js压缩脚本
 */
gulp.task('mini-js', function() {
    gulp.src("js/*.js")
    .pipe(uglify()).pipe(gulp.dest("min-js/"));
})

/**
 * css压缩
 */
gulp.task('mini-css', function () {
    gulp.src('css/*.css')
    .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
    .pipe(cssmin())
    .pipe(gulp.dest('min-css/'));
});