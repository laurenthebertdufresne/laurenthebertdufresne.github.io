// Initiate Turbo
Turbolinks.start();

document.addEventListener('turbolinks:load', function() {
    console.log('turbolinks:load');
    $('.site-header').scrollToFixed({
        spacerClass:'site-spacer'
    });
});
