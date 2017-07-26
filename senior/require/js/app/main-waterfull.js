requirejs.config({
    baseUrl: "js/com",
    paths: {
        "jquery": "../lib/jquery.min",
        "require": "../lib/require.min"
    }
})

define(["jquery", "waterfull"], function($, water){
    water.init($(".ct"))
})