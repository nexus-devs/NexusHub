/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 *
 */
module.exports = function(gulp, plugins, growl) {

	gulp.task('concat:js', function() {
		return gulp.src(require('../pipeline').jsFilesToInject)
				.pipe(plugins.jshint('.jshintrc'))
				.pipe(plugins.jshint.reporter('default'))
				.pipe(plugins.concat('production.js'))
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.uglify(/* {mangle: true} */))
				.pipe(gulp.dest('./.tmp/public/concat'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Concatenate Scripts task complete' })));
	});

	gulp.task('concat:css', function() {
		return gulp.src(require('../pipeline').cssFilesToInject)
				.pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'))
				.pipe(plugins.concat('production.css'))
				.pipe(plugins.rename({ suffix: '.min' }))
				.pipe(plugins.minifyCss())
				.pipe(gulp.dest('./.tmp/public/concat'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Concatenate CSS task complete' })));
	});

};

