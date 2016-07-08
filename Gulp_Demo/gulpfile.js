var gulp =require('gulp');
var uglify = require('gulp-uglify');
var less =require('gulp-less');
//压缩javascript 文件，
gulp.task('minifyjs',function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/min'))
});

//编译less 
gulp.task('lessbuild',function(){
    gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./less/min'))
});

//默认任务
gulp.task('default', function(){
    gulp.run('minifyjs');
    gulp.run('lessbuild');
});

gulp.task('fk', function(){
  gulp.run('minifyjs');
});