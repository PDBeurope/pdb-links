/*global require*/
'use strict';

var gulp = require("gulp");

var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var prefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var del = require("del");
var bump = require("gulp-bump");
var git = require("gulp-git");
var rename = require("gulp-rename");
var header = require('gulp-header');

var srcComplete = [
    "bower_components/angular/angular.js",
	"bower_components/d3/d3.js",
	"lib/js/*.js"
];

var srcCore = [
   "lib/js/directives.js",
];

var srcCss = 'lib/css';


gulp.task("clean", function (cb) {
    del('[build]', cb);
});

gulp.task("scriptsComplete", function () {
    return gulp.src(srcComplete)
        .pipe(concat("pdb.links.bundle.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./build"));
});

gulp.task("scriptsCore", function () {
    return gulp.src(srcCore)
        .pipe(concat("pdb.links.core.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./build"));
});

gulp.task('stylesComplete', function () {
    gulp.src(srcCss + '/*.css')
        .pipe(prefixer('last 5 versions'))
        .pipe(concat('pdb.links.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./build"));
});

gulp.task("bump", function(){
   return gulp.src(['./package.json', './bower.json'])
    .pipe(bump())
    .pipe(gulp.dest('./')); 
});

gulp.task("tag", function(){
    var pkg = require('./package.json');
    var v = pkg.version;
    var message = 'Release ' + v;
    
    return gulp.src('./')
        .pipe(git.commit(message))
        .pipe(git.tag(v, message))
        .pipe(git.push('origin', 'master', '--tags'))
        .pipe(gulp.dest('./'));
})

gulp.task('npm', ['bump','tag'], function (done) {
  require('child_process').spawn('npm', ['publish'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task("default", ["clean", "scriptsCore", "scriptsComplete", "stylesComplete"]);
gulp.task("release",['default','npm']);