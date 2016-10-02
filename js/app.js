// Initiate Turbo
Turbolinks.start();

document.addEventListener("turbolinks:load", function() {
    $('.site-header').scrollToFixed();
});
