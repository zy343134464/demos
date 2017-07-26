requirejs.config({
    baseUrl: "js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "gotop"], function($, gotop){
    gotop.init($(".ct"))
})