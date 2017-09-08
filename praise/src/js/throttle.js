window.throttle = function(func, delay) {
    var lastTime = 0;
    var timeout = null;
    var result;
    var ctx;
    var args;

    var next = function() {
        lastTime = new Date().getTime();
        result = func.apply(ctx, args);
        if (!timeout) {
            ctx = null;
            args = null;
        }
    }

    return function() {
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
    }
}