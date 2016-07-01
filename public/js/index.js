// General Site Functions
// ------------------------------

// Bug Hunters
$(document).ready(function () {
    console.log('Find any bugs or security issues? Contact us on https://discord.gg/8mCNvKp. We greatly appreciate your help :)')
})




// Show/Hide Menu Bar when appropriate
/* var lastScrollTop = 0;

$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.top-nav').css('transform', 'translateY(-90px)')
    } else {
        $('.top-nav').css('transform', 'translateY(0)')
    }
    lastScrollTop = st;
});*/




// Show Search Bar when scrolling
$(window).on('scroll', function () {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 450;

    if (y_scroll_pos > scroll_pos_test) {
        $('.top-nav-search > input').css('opacity', '1');
    }
});



// Define Chart Options
options = {
    colors: ['#34b083', '#40bebf', '#2a7c9e', '#6abf40', '#8ea1ac', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgba(0,0,0,0)'],
                [1, 'rgba(0,0,0,0)']
            ]
        },
    },
    tooltip: {
        backgroundColor: '#2e3540',
        borderRadius: 0,
        borderWidth: 2
    },

    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#8ea1ac',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        },
    }
};
