// General Site Functions
// ------------------------------

// Bug Hunters
$(document).ready(function () {
console.log('Find any bugs or security issues? Contact us on https://discord.gg/8mCNvKp. We greatly appreciate your help :)')
})


// Show Search Bar when scrolling
$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 450;

    if(y_scroll_pos > scroll_pos_test) {
        $('.top-nav-search > input').css('opacity', '1');
    }
});
