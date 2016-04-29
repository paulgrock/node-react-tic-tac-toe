import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import livereload from 'gulp-livereload';

module.exports = () => {
	gulp.task('develop', () => {
		livereload.listen();
		nodemon({
			script: 'bin/www',
			ext: 'js jade coffee',
			stdout: false
		}).on('readable', function () {
			this.stdout.on('data', (chunk) => {
				if (/^Express server listening on port/.test(chunk)) {
					livereload.changed(__dirname);
				}
			});
			this.stdout.pipe(process.stdout);
			this.stderr.pipe(process.stderr);
		});
	});
};
