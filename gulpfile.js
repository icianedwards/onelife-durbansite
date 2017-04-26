//[DEPENDENCY INJECTION]
var gulp = require('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var coffee = require('gulp-coffee');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var fs = require('fs');

//[VARIABLES]
var path = "configs/paths.json";
var json = JSON.parse(fs.readFileSync(path));

//[CORE STYLUS COMPILE]
gulp.task('stylus-compile', function () {
  return gulp.src('assets/styles/stylus/style.styl')
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/styles/css'));
});

//[CORE STYLUS WATCH]
gulp.task('core-stylus:watch', function () {
  gulp.watch('assets/styles/stylus/**/*.styl', ['stylus-compile']);
});

//[PUG COMPILER]
gulp.task('pug-compile', function () {
  return gulp.src(['./*pug', '!./node_modules/**'])
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./'))
});

//[CORE PUG WATCH]
gulp.task('pug-watch:watch', function () {
  gulp.watch(['./*pug', './views/**/*.pug'], ['pug-compile']);
});

//[COFFEESCRIPT COMPILATION]
gulp.task('coffee-compile', function () {
  gulp.src('./assets/scripts/coffee/*.coffee')
    .pipe(coffee({ bare: true }))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/scripts/js/'));
});

//[COFFEESCRIPT WATCH]
gulp.task('coffee-watch:watch', function () {
  gulp.watch('./assets/scripts/coffee/*.coffee', ['coffee-compile']);
});

//[CONCAT THIRDPARTY SCRIPTS]
gulp.task('concat-js', function () {
  gulp.src(json.thirdPartyScripts).pipe(concat('lib.js'))
    .pipe(gulp.dest('./assets/scripts/js/'));
});

//[CONCAT THIRDPARTY STYLES]
gulp.task('concat-css', function () {
  gulp.src(json.thirdPartyStyles).pipe(concat('lib.css'))
    .pipe(gulp.dest('./assets/styles/css/'));
});

//[RELASE WITH SPECIAL CASES CONSIDERED]
gulp.task('release', function () {
  gulp.src(['./*.html', '**/*.css', '**/*.js', '!./node_modules/**', './*.md', './*.ico', './*/media/*/**', './*/fonts/*/**', './*/styles/fonts/*', '!./gulpfile.js']).pipe(gulp.dest('../onelife-release'))
})

//[DEFAULT TASK]
gulp.task('default', ['pug-watch:watch', 'coffee-watch:watch', 'core-stylus:watch']);