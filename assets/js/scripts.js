/* ==========================================================================
    Initialize Scripts
========================================================================== */ 

$(function () {
    jQuery('#maximage').maximage({
        cycleOptions: {
            prev: '#arrow_left',
            next: '#arrow_right'
        }
    });
});


/* ==========================================================================
    Countdown
========================================================================== */ 

// Le time value
var end = new Date('01/01/2014 12:00 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    
    // Le message
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    
    // Le math
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    // Le style
    document.getElementById('countdown').innerHTML = '<div class="span3">' + days + '<span>days</span></div>';
    document.getElementById('countdown').innerHTML += '<div class="span3">' + hours + '<span>hours</span></div>';
    document.getElementById('countdown').innerHTML += '<div class="span3">' + minutes + '<span>minutes</span></div>';
    document.getElementById('countdown').innerHTML += '<div class="span3"><div class="animated flipInX">' + seconds + '</div><span>seconds</span></div>';
}

timer = setInterval(showRemaining, 1000);