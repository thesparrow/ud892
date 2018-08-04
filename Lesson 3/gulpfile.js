var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

 gulp.task('styles', function() {
	    gulp.src('sass/*.scss')
			.pipe(watch('sass/*.scss'))
	        .pipe(sass().on('error', sass.logError))
	        .pipe(autoprefixer({
	            browsers: ['last 2 versions']
	        }))
	        .pipe(gulp.dest('./css'))
	        .pipe(browserSync.stream());
});

//assign a default task that watches files
gulp.task('default', function() {
	    gulp.watch('sass/*.scss',gulp.series('styles') );
	
	    browserSync.init({
	        server: './'
	    });
});


//gulp.watch('sass/**/*.scss', gulp.series('styles'));
gulp.watch("*.html").on('change', browserSync.reload);