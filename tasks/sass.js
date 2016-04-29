import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import pleeease from 'gulp-pleeease';

module.exports = () => {
	return gulp.src([
		'public/sass/**/*.scss',
		'!sass/**/_*.scss'
	])
	.pipe(sourcemaps.init())
	.pipe(sass({
		style: 'compressed',
		includePaths: [
			'./node_modules/'
		]
	}))
	.pipe(pleeease({
		rem: ['16px']
	}))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./public/dist/css'));
};
