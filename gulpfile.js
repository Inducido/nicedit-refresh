 
 // Simplest build file / Nadir Boussoukaia
 
var gulp = require('gulp'),  
    concat = require('gulp-concat');  


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
    .pipe(concat('nicedit.js'))
    .pipe(gulp.dest('./dist/'));
});



gulp.task('default', ['scripts']);

