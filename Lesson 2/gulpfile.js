var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



// configure which files to watch and what tasks to use on file changes
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', gulp.series('styles'));
	
	browserSync.init({
		server: "./"
	});
	browserSync.stream();
});

/*gulp.task('watch', function() {
	gulp.watch('app/css/*.css', gulp.series('styles'));
	gulp.watch('app/js/*.js', gulp.series('scripts'));
	gulp.watch('app/img/*', gulp.series('images'));
});*/

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

