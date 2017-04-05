$(document).ready(function () {
    //[FULLPAGE]
    $('#fullpage').fullpage({
        menu: '#menu',
        navigation: false,
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 0,
        scrollBar: false,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        responsiveSlides: true,
        verticalCentered: true,
        responsiveWidth: 768
    });
    updateNextMeetingTime();
    setTimeout(rotateImages, 3000);
});

//[SLICK]
$('.section-slider').slick({
    arrows: true,
    prevArrow: ".tool-prev",
    nextArrow: ".tool-next",
    responsive: [
        {
            breakpoint: 769,
            settings: {
                infinite: true,
                dots: true,
                arrows: false,
                prevArrow: ".",
                nextArrow: ".",
            }
        }
    ]
});

$('.pic-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                infinite: true,
                slidesToShow: 1,
            }
        }
    ]
});


$('.main-section-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear', autoplay: true,
    autoplaySpeed: 5000,
});

$('.events-section-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear', autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: ".tool-previous",
    nextArrow: ".tool-nextous",
});


var currentImageSet = 1;
function rotateImages() {
    currentImageSet++;
    if (currentImageSet == 6) {
        currentImageSet = 1;
    }
    $('#aboutImg1').attr('src', 'img/about/' + ((currentImageSet * 6) - 5).toString() + '.jpg');
    $('#aboutImg2').attr('src', 'img/about/' + ((currentImageSet * 6) - 4).toString() + '.jpg');
    $('#aboutImg3').attr('src', 'img/about/' + ((currentImageSet * 6) - 3).toString() + '.jpg');
    $('#aboutImg4').attr('src', 'img/about/' + ((currentImageSet * 6) - 2).toString() + '.jpg');
    $('#aboutImg5').attr('src', 'img/about/' + ((currentImageSet * 6) - 1).toString() + '.jpg');
    $('#aboutImg6').attr('src', 'img/about/' + ((currentImageSet * 6) - 0).toString() + '.jpg');
    setTimeout(rotateImages, 3000);
}

function updateNextMeetingTime() {
    var targetDay = 7;
    var targetHours = [8, 9];
    var startHour = 8;
    var startMinute = 0;
    var startSecond = 0;
    var date = new Date();
    var currentDay = date.getDay()
    var currentHour = date.getHours();
    var isRightHour = false;
    for (var i = 0; i < targetHours.length; i++) {
        if (targetHours[i] == currentHour) {
            isRightHour = true;
        }
    }
    if (currentDay == targetDay && isRightHour) {
        $('.meetingNow').show();
        $('.meetingComingUp').hide();
    }
    else {
        $('.meetingNow').hide();
        $('.meetingComingUp').show();
    }
    var nextSunday = nextDay(targetDay, startHour, startMinute, startSecond);
    var diff = parseInt((nextSunday - date) / 1000);
    var secs = diff % 60;
    diff -= secs;
    var mins = (diff / 60) % 60;
    diff -= (mins * 60);
    var hrs = (diff / 60 / 60) % 24;
    diff -= (hrs * 60 * 60);
    var days = diff / 60 / 60 / 24;
    var res = days.toString() + ' days ' + hrs.toString() + ' hrs ' + mins.toString() + ' mins ' + secs.toString() + ' secs';
    //$('#spNextMeeting').text(res);
    $('.spNextMeetingDays').text(days);
    $('.spNextMeetingHrs').text(hrs);
    $('.spNextMeetingMins').text(mins);
    $('.spNextMeetingSecs').text(secs);
    setTimeout(updateNextMeetingTime, 200);
}

function nextDay(day, hr, min, sec) {
    var now = new Date();
    now.setDate(now.getDate() + (day + (7 - now.getDay())) % 7);
    now.setHours(hr);
    now.setMinutes(min);
    now.setSeconds(sec);
    now.setMilliseconds(0);
    return now;
}


var $allVideos = $("iframe[src^='//www.youtube.com']"),
    // The element that is fluid width
    $fluidEl = $("body");


$allVideos.each(function () {
    $(this)
        .data('aspectRatio', this.height / this.width)
        .removeAttr('height')
        .removeAttr('width');
});

$(window).resize(function () {
    var newWidth = $fluidEl.width();
    // Resize all videos according to their own aspect ratio
    $allVideos.each(function () {
        var $el = $(this);
        $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));
    });
    // Kick off one resize to fix all videos on page load
}).resize();

function playVideo() {
    $('.playoverlay').css("display", 'none');
    document.getElementById('videoOne').play();
}

function bringBackPlayButton() {
    $('.playoverlay').css("display", 'block');
}


function reverseColor() {
    $(".logo-instagram").css("background", "#FFF").css("color", "transparent").css("-webkit-background-clip", "text").css("-webkit-text-fill-color", "transparent");
}

function revertColor() {
    $(".logo-instagram").css("background", "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)").css("background", "-webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)").css("background", "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)").css("color", "transparent").css("-webkit-background-clip", "text").css("-webkit-text-fill-color", "transparent");
}

$('#about').click(function(){
alert('asd');
});