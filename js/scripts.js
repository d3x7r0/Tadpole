function Console () {
    this.log = function (msg) {
        air.trace(msg);
    }
    return this;
}
console = new Console();

function togglePostForm() {
    var form = $('post'),
        oldBottom = $('contents').getChildren('.bottom').getLast();
    
    if (form.isDisplayed()) {
        form.hide();
        oldBottom.show();
    } else {
        oldBottom.hide();
        form.show();
    }
}

function clearActive() {
    $$('#topnav li a').each(function(item) { item.removeClass('active'); });
}

function moveTo(event) {
    event.stop();
    clearActive();
    this.addClass('active');
    var id = this.getProperty('href').substring(1);

    switch(id) {
        case 'timeline':
            $('timeline').setStyle('margin-left',0);
            break;
        case 'mentions':
            $('timeline').setStyle('margin-left', '-100%');
            break;
    }
}

window.addEvent('domready', function() {
    // Detect mac and invert the window controls
    if (air.Capabilities.os.substring(0,6) == "Mac OS") {
        window.document.body.addClass("mac");
    }

    $('minimize').addEvent('click', function(e) {
            window.nativeWindow.minimize();
            e.stop();
        });
    
    $('maximize').addEvent('click', function(e) {
            if (window.nativeWindow.displayState == "maximized") {
                window.nativeWindow.restore();
                window.document.body.removeClass("maximized");
            } else {
                window.nativeWindow.maximize();
                window.document.body.addClass("maximized");
            }
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

    $$('#topnav li a').each(function(item) {
            item.addEvent('click', moveTo);
        });
    
    $$('.post-button').addEvent('click', function(e) {
            togglePostForm();
            e.stop();
        });

    window.nativeWindow.addEventListener('displayStateChange', function(e) {
            if (window.nativeWindow.displayState == "maximized") {
                window.document.body.addClass("maximized");
            } else {
                window.document.body.removeClass("maximized");
            }
        });

    air.Introspector.Console.log("");
});
