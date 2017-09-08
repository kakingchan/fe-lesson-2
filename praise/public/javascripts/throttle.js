(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.throttle = mod.exports;
    }
})(this, function () {
    "use strict";

    window.throttle = function (func, delay) {
        var lastTime = 0;
        var timeout = null;
        var result;
        var ctx;
        var args;

        var next = function next() {
            lastTime = new Date().getTime();
            result = func.apply(ctx, args);
            if (!timeout) {
                ctx = null;
                args = null;
            }
        };

        return function () {
            var now = new Date().getTime();
            var time = now - lastTime;
            ctx = this;
            args = arguments;
            if (time > delay) {
                clearTimeout(timeout);
                lastTime = now;
                result = func.apply(ctx, args);
                if (!timeout) {
                    ctx = null;
                    args = null;
                }
            } else if (!timeout) {
                timeout = setTimeout(next, delay);
            }
            return result;
        };
    };
});