var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
    return gulp.src(['scss/main.scss', 'scss/fonts.scss'])
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('minify', function () {
    return gulp.src('css/*.css')
        .pipe($.cleanCss({ processImport: false }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest('../public/css'));
});

gulp.task('esbuild', function() {
    return gulp.src('js/app/*.js')
        .pipe($.babel())
        .pipe(gulp.dest('../public/js/app/dist'));
});

gulp.task('default', ['sass', 'minify', 'esbuild'], function() {
    gulp.watch(['scss/**/*.scss'], ['sass']);
    gulp.watch(['css/*.css'], ['minify']);
    gulp.watch(['js/app/*.js'], ['esbuild']);
});
