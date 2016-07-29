/**
 * Compile CoffeeScript files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles coffeeScript files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 */
module.exports = function(gulp, plugins, growl) {
	gulp.task('coffee:dev', function() {
		return gulp.src('assets/js/**/**.coffee')
		.pipe(plugins.coffee({bare: true}).on('error', plugins.util.log))
		.pipe(gulp.dest('.tmp/public/js/'))
		.pipe(plugins.if(growl, plugins.notify({ message: 'Coffee compile task complete' })));
	});
};
