FixedSticky.tests.sticky = false;

// Initiate Turbo
Turbolinks.start();

var didScroll = false;

function onScroll(ev) {
    didScroll = true;
}

function onRender(ev) {
    if (didScroll) {
        var progress = window.scrollY / (document.body.scrollHeight) * 100;

        document.body.style.backgroundPosition = 'center ' + (-5 - progress * 2) +  'vw'

        didScroll = false;
    }

    window.requestAnimationFrame(onRender);
}

$(document).on('turbolinks:load', function(ev) {
    $('.site-header').fixedsticky();
});

$(window).on('scroll', onScroll);
$(window).on('resize', onScroll);
window.requestAnimationFrame(onRender);