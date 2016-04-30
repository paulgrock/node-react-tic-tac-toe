require('gulp-task-loader')('tasks');
const gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('watch', () => {
	gulp.watch('public/sass/**/*.scss', ['sass']);
	gulp.watch([
		'public/**/*.js',
		'public/**/*.jsx',
		'!node_modules/**',
		'!public/dist/**'
	], ['test']);
	gulp.start('watchify');
});

gulp.task('build', ['browserify', 'sass']);
gulp.task('default', ['watch']);
