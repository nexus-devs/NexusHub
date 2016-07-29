/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 */
module.exports = function(gulp, plugins, growl) {

	gulp.task('less:dev', function() {
		return gulp.src('assets/styles/importer.less')
				.pipe(
					plugins.less({
						expand: true,
						ext: '.css'
					})
				)
				.pipe(gulp.dest('.tmp/public/styles/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'less dev task complete' })));
	});
};
