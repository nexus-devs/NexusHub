module.exports = function (gulp, plugins) {
	gulp.task('linkAssetsBuildProd', function(cb) {
		plugins.sequence(
			'sails-linker-gulp:prodAssetsRelative',
			'sails-linker-gulp:prodViewsRelative',
			cb
		);
	});
};
