module.exports = function(gulp) {

    gulp.task("scss", function () {
        gulp.src(
            "assets/styles/*.scss"
        ).pipe(scss(
            {"bundleExec": true}
        )).pipe(gulp.dest(".tmp/public/css/"));
    });

};
