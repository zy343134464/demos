requirejs.config({
    baseUrl: "js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "lazyload"], function($, lazy){
    lazy.init($(".pic img"))
})