const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const imageMin = require("gulp-imagemin")

gulp.task('watch', function () {
	gulp.watch('src/*.html', gulp.series('HTMLcopy'));
	gulp.watch('src/assets/css/*.css', gulp.series('autoPrefixStyles'));
	gulp.watch('src/assets/images/*', gulp.series('imageMin'));
  });


gulp.task("HTMLcopy", async function () {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});


gulp.task("autoPrefixStyles", async function () {
  gulp
    .src("src/assets/css/styles.css")
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("dist/assets/css"));
});

gulp.task("imageMin", async function() {
	gulp.src('src/assets/images/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/assets/images'))
});

gulp.task('default', gulp.parallel(['HTMLcopy', 'autoPrefixStyles', 'imageMin']));
