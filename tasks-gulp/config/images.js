/**
 * Copies images to .tmp/images after compressing them.
 *
 * ---------------------------------------------------------------
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
	 gulp.task('images', function() {
		return gulp.src('assets/images/**/*')
				.pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
				.pipe(gulp.dest('.tmp/public/images'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Images task complete' })));
	});
};
