'use strict';

const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');
const cssmin = require('gulp-clean-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const rimraf = require('rimraf');
const svgmin = require('gulp-svgmin');

const path = {
  build: {                                  // Тут мы укажем куда складывать готовые после сборки файлы
    html: 'build/',
    js: './build/js/',
    css: 'build/css/',
    fonts: 'build/fonts/',
    img: 'build/img/',
    svg: 'build/img/'
  },
  src: {                                    // Пути откуда брать исходники
    html: 'src/*.html',                     // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: 'src/js/index.js',                  // В стилях и скриптах нам понадобятся только main файлы
    style: 'src/sass/index.sass',
    fonts: 'src/fonts/**/*.*',
    img: 'src/blocks/**/*.+(png|jpg)',      // Синтаксис img/**/*.* означает - взять все файлы всех расширений
    svg: 'src/blocks/**/*.svg'              // Синтаксис img/**/*.* означает - взять все файлы всех расширений
                                            // из папки и из вложенных каталогов
  },
  watch: {                                  // Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: 'src/**/*.html',
    js: 'src/**/*.js',
    style: 'src/**/*.sass',
    fonts: 'src/fonts/**/*.*',
    img: 'src/**/*.+(png|jpg)',
    svg: 'src/**/*.svg'
  },
  clean: './build'
};
const configServer = {
  server: {
    baseDir: "./build"
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "Frontend_Devil"
};

gulp.task('locale', function () {           // Web server port: 9000
  return browserSync(configServer);
});

gulp.task('clean', function (cb) {          // remove build/**
  rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
  return gulp.src(path.src.js)              // Найдем наш main файл
    .pipe(uglify())                         // Сожмем наш js
    .pipe(gulp.dest(path.build.js))         // Выплюнем готовый файл в build
    .pipe(reload({stream: true}));          // И перезагрузим сервер
});

gulp.task('style:build', function () {
  return gulp.src(path.src.style)           // Выберем наш main.scss
    .pipe(sass())                           // Скомпилируем
    .pipe(prefixer())                       // Добавим вендорные префиксы
    .pipe(cssmin())                         // Сожмем
    .pipe(gulp.dest(path.build.css))        // И в build
    .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
  return gulp.src(path.src.img)             // Выберем наши картинки
    .pipe(imagemin({                        // Сожмем их
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}],
      use: [pngquant({quality: '60-80', speed: 4})],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))        // И бросим в build
    .pipe(reload({stream: true}));
});

gulp.task('imageSvg:build', function () {
  return gulp.src(path.src.svg)             // Выберем наши SVG картинки
    .pipe(svgmin({
      plugins: [{
        removeDoctype: true
      }, {
        removeComments: true
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }, {
        convertColors: {
          names2hex: false,
          rgb2hex: false
        }
      }]
    }))
    .pipe(gulp.dest(path.build.svg))        // И бросим в build
    .pipe(reload({stream: true}));
});


gulp.task('fonts:build', function() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .pipe(reload({stream: true}));

});

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'fonts:build',
  'image:build',
  'imageSvg:build'
]);

gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.svg], function(event, cb) {
    gulp.start('imageSvg:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('default', ['build', 'locale', 'watch']);
