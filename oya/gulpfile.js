//sass编译,获取插件名
var gulp=require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var concat=require('gulp-concat');
var jsmin=require('gulp-uglify');
var htmlmin=require('gulp-htmlmin');

//创建task
//目的：编译sass
gulp.task('buildSass',function(){
	
	 //1）查找sass文件
	 gulp.src('sass/*.scss')
	   //把文档流输入出到gulp-sass进行编译
	   
	   //2）输出未压缩版本
	   .pipe(sass({outputStyle:'expanded'}))
	   .pipe(rename({suffix:'.mins'}))
	   
	   //3)输出文件
	   .pipe(gulp.dest('./css'));
})
//监听sass文件修改自动编译
gulp.task('jtSass',function(){
	  //只要监听的sass文件有修改，就自动执行buildSass文件,sass文件修改的内容，在css里面同步修改
	  gulp.watch('./sass/*.scss',['buildSass'])
})

//js自动化处理

































