module.exports = function (gulp, plugins) {
	gulp.task('build', function (cb) {
		plugins.sequence(
			'compileAssets',
			'linkAssetsBuild',
			'clean:build',
			'copy:build',
			cb
		);
	});
};
