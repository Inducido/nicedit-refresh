 
 // Simplest build file / Nadir Boussoukaia
 // uglified with sourcemaps
 
var gulp = require('gulp'),  
    concat = require('gulp-concat'),  
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

var configuration = {
    paths: {
        src: {
            html: './src/*.html',
            js0: './src/*.js',
            js: [
                    "src/nicLicense.js",
                    "src/nicVersion.js",
                    "src/nicCore/bkLib.js",
                    "src/nicCore/nicConfig.js",
                    "src/nicCore/nicCore.js",
                    "src/nicCore/nicInstance.js",
                    "src/nicCore/nicIFrameInstance.js",
                    "src/nicCore/nicPanel.js",
                    "src/nicCore/nicButton.js",
                    "src/nicCore/nicPlugin.js",
                    "src/nicPane/nicPane.js",
                    "src/nicAdvancedButton/nicAdvancedButton.js",
                    "src/nicButtonTips/nicButtonTips.js",
                    "src/nicSelect/nicSelect.js",
                    "src/nicLink/nicLink.js",
                    "src/nicColors/nicColors.js",
                    "src/nicImage/nicImage.js",
                    "src/nicSave/nicSave.js",
                    "src/nicCode/nicCode.js"
                    
                ],
            css: [
                './src/css/bootstrap.min.css',
                './src/css/main.css'
            ]
        },
        dist: './dist'
    }
};




gulp.task('scripts', function() {
  return gulp.src(configuration.paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(concat('nicedit.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(rename('nicedit.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
    
});

// copy icon images from the src folder to the demo folder
gulp.task('copy', function() {
    gulp.src(["src/**/*.gif","src/**/*.png"])
        .pipe(gulp.dest('demos/src'));
});

gulp.task('default', ['scripts','copy']);

