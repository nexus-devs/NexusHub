// todo: get it working properly.
/**
 * A gulp task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
	gulp.task('sync:dev', function() {
		return gulp.src(['./assets/**/*.!(coffee|less)', '!assets/images{,/**}'])
				.pipe(plugins.changed('.tmp/public'))
				.pipe(gulp.dest('.tmp/public'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Sync task complete' })));
	});
};
