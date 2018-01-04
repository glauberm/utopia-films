var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('clean', function () {
    return del(['assets/prod']);
});

gulp.task('styles', function () {
    return gulp
        .src([
            './assets/dev/styles/bootstrap.min.less',
            './node_modules/magnific-popup/dist/magnific-popup.css',
            './node_modules/slick-carousel/slick/slick.less',
            './assets/dev/styles/styles.less'
        ])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('main.min.css'))
        .pipe(rev())
        .pipe(gulp.dest('assets/prod/css/'))
    ;
});

gulp.task('noscript-styles', function () {
    return gulp
        .src([
            './assets/dev/styles/noscript-styles.less'
        ])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('noscript.min.css'))
        // .pipe(rev())
        .pipe(gulp.dest('assets/prod/css/'))
    ;
});

gulp.task('scripts', function () {
    return gulp
        .src([
            './assets/dev/scripts/jquery-3.2.1.slim.min.js',
            './node_modules/bootstrap/js/tab.js',
            './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
            './node_modules/slick-carousel/slick/slick.min.js',
            './assets/dev/scripts/scripts.js',
            './assets/dev/scripts/popup-gallery.js',
            './assets/dev/scripts/slick.js'
        ])
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(rev())
        .pipe(gulp.dest('assets/prod/js/'))
    ;
});

gulp.task('ltie9-scripts', function () {
    return gulp
        .src([
            './node_modules/html5shiv/dist/html5shiv.min.js',
            './node_modules/respond.js/dest/respond.min.js'
        ])
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('ltie9.min.js'))
        // .pipe(rev())
        .pipe(gulp.dest('assets/prod/js/'))
    ;
});

gulp.task('scrollreveal-scripts', function () {
    return gulp
        .src([
            './node_modules/scrollreveal/dist/scrollreveal.min.js',
            './assets/dev/scripts/scrollreveal-init.js'
        ])
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('scrollreveal.min.js'))
        // .pipe(rev())
        .pipe(gulp.dest('assets/prod/js/'))
    ;
});

gulp.task('build', [
    'styles',
    'noscript-styles',
    'scripts',
    'ltie9-scripts',
    'scrollreveal-scripts'
]);
