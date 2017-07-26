var $ = require("jquery")
var carousel = require("./js/com/carousel")
var gotop = require("./js/com/gotop")
var water = require("./js/com/waterfull")
var loadmore = require("./js/com/loadmore")
var lazy = require("./js/com/lazyload")


carousel.init($(".carousel"))

gotop.init($('body'))


$('.ct img').on('load',function(){
	water.init($('.ct'))
})

lazy.init($('.ct img'))

loadmore.init($(".btn"), $(".ct"))