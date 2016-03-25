var last_known_scroll_position = 0;
var ticking = false;

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );

function doSomething(scroll_pos) {
    console.log(scroll_pos / height, body.style.backgroundPosition);

    body.style.backgroundPosition = '50% ' + -(scroll_pos / height) * 50 + '%';
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
    }
    ticking = true;
});