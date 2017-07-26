var gulp = require("gulp") //加载gulp，相当于机床

var cssnano = require("gulp-cssnano") //css压缩
var concat = require("gulp-concat") //文件合并
var uglify = require("gulp-uglify") //js压缩
var rename = require("gulp-rename") //重命名

var imagemin = require("gulp-imagemin") //图片压缩

var browsersync = require("browser-sync").create() //浏览器同步刷新


gulp.task("css", function(){
    gulp.src(["./css/index.css",
              "./css/carousel.css",
              "./css/waterfull.css",
              "./css/loadmore.css"]) //保证了css的顺序
        .pipe(concat("merge.css")) //css合并，文件名字为 index-merge.css
        .pipe(cssnano())     //css压缩
        .pipe(gulp.dest("dist/css"))  //输出到 dist/css 文件夹下
})

gulp.task("cssall", function(){
    gulp.src("./css/*.css")  //不保证 css 的顺序，如果 css 写的不好，可能会有样式覆盖
        .pipe(concat("merge.css")) //css合并，文件名字为 index-merge.css
        .pipe(cssnano())     //css压缩
        .pipe(gulp.dest("dist/css"))  //输出到 dist/css 文件夹下
})

gulp.task("imagemin", function(){
    gulp.src("./img/*.jpg")  //选择所有的图片
        .pipe(imagemin())    //压缩图片
        .pipe(gulp.dest("dist/img"))  //输出到 dist/img 文件夹下
})

gulp.task('build', ['css']);

gulp.task("reload",['css'],function(){
    browsersync.reload()
})

gulp.task("server", function(){
    browsersync.init({   //开启服务器
        server: {
            baseDir:"./"    //设定服务器的根目录
        }
    })
    gulp.watch(["./css/*.css", "./js/com/*.js", "./*.html"], ["reload"]) //监听，文件有变化就刷新
})

