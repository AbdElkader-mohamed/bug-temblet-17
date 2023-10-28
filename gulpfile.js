// start 
const {src, dest, watch, series} = require('gulp');
const pug = require('gulp-pug');
const imgWebp = require('gulp-webp');
const terser = require('gulp-terser');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps'); 
const minify = require('gulp-clean-css');
const browserSync = require('browser-sync').create();




function compilePug () {
  return src('src/pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest("./dist/"))
    .pipe(browserSync.stream())
}
function compileScss () {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    // .pipe(sourcemaps())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function jsMin() {
  return src('src/js/*.js')
  .pipe(terser())
  .pipe(dest('dist/js/'))
}

function webpImg() {
  return src('src/images/*')
  .pipe(imgWebp())
  .pipe(dest('dist/images'))
}

function watchTasks() {
  browserSync.init({server:'./dist/'});
  watch('src/scss/**/*.scss',compileScss);
  watch('src/pug/**/*.pug',compilePug);
  watch('src/js/*.js',jsMin);
  watch('dist/images/*',webpImg);
  watch("./dist/*.html").on("change", browserSync.reload);
}


exports.default = series (

  compilePug,
  compileScss,
  jsMin,
  webpImg,
  watchTasks,
)


// gulp.task('pug', () =>{
//   return gulp.src('src/pug/*.pug').pipe(pug({ pretty: true })).pipe(gulp.dest("./dist/")).pipe(browserSync.stream());
// });
// gulp.task("sass", () => {
//   return gulp.src("./src/scss/main-*.scss").pipe(sass()).pipe(gulp.dest("./dist/css/")).pipe(browserSync.stream());
// });

// gulp.task("imgWebp", () => {
//   return gulp.src("./src/images/*").pipe(imgWebp()).pipe(gulp.dest("./dist/img/"))
// })

// gulp.task('serve', () => {
//   browserSync.init({server:'./dist/'});
//   gulp.watch('src/pug/**/*.pug',gulp.series('pug'));
//   gulp.watch('src/scss/**/*.scss',gulp.series('sass'));
//   gulp.watch('dist/img/*',gulp.series('imgWebp'));
//   gulp.watch("./dist/*.html").on("change", browserSync.reload);
// });

// // function watchTask(){

// // }

// gulp.task('default', gulp.series('serve','pug','sass','imgWebp'));