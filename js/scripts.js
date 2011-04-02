function Console () {
    this.log = function (msg) {
        air.trace(msg);
    }
    return this;
}
console = new Console();

window.addEvent('domready', function() {
    $('minimize').addEvent('click', function(e) {
            window.nativeWindow.minimize();
            e.stop();
        });

    $('close').addEvent('click', function(e) {
            window.nativeWindow.close();
            e.stop();
        });

    $('titlebar').addEvent('mousedown', function(e) {
            window.nativeWindow.startMove();
            e.stop();
        });

    $('resize-handle').addEvent('mousedown', function(e) {
            window.nativeWindow.startResize();
            e.stop();
        });
});
