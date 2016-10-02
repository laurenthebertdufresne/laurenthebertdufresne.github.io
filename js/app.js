// Initiate Turbo
Turbolinks.start();

var didScroll = false;

function onScroll() {
    didScroll = true;
}

function onRender() {
    if (didScroll) {
        var progress = window.scrollY / (document.body.scrollHeight) * 100;

        document.body.style.backgroundPosition = 'center ' + (-5 - progress * 2) +  'vw'

        didScroll = false;
    }

    window.requestAnimationFrame(onRender);
}

document.addEventListener('turbolinks:load', function() {
    console.log('turbolinks:load');
    $('.site-header').scrollToFixed({
        spacerClass:'site-spacer'
    });
});


window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
window.requestAnimationFrame(onRender);