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






$(function () {
    Highcharts.theme = {
        colors: ['#34b083', '#8ea1ac', '#8ea1ac', '#8ea1ac', '#8ea1ac', '#64E572',
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
            }

        }
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);


    $('#chart').highcharts({
        chart: {
            type: 'areaspline',
            style: {
                font: '18px "Raleway", Verdana, sans-serif',
                color: '#8ea1ac'
            }
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            gridLineColor: "#69767e",
            gridLineDashStyle: 'dash',
            gridLineWidth: 1,
            minorGridLineColor: "#E0E0E0",
            minorGridLineDashStyle: "Solid",
            minorGridLineWidth: 1,
            categories: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ],
            allowDecimals: false,
            lineColor: '#8ea1ac',
            tickColor: 'rgba(0,0,0,0)',
            startOnTick: true,
            labels: {
                style: {
                    color: '#8ea1ac',
                    font: '14px Arial'
                },
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            gridLineColor: "#69767e",
            gridLineDashStyle: 'dash',
            gridLineWidth: 1,

            lineColor: '#8ea1ac',
            tickColor: 'rgba(0,0,0,0)',
            title: {
                text: ''
            },
            labels: {
                style: {
                    color: '#8ea1ac',
                    font: '14px Arial'
                },
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            style: {
                color: '#8ea1ac',
                font: '24px Arial'
            },
            pointFormat: '{series.name} at <b>{point.y:,.0f} Platinum'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Blueprint',
            showInLegend: false,
            data: [6, 11, 32, 110, 235, 369, 640]
        }, {
            name: 'USSR/Russia',
            showInLegend: false,
            data: [null, null, null, null, 100, 200, 426]
        }]
    });
});
