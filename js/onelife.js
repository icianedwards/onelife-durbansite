// Google Maps Scripts
var mapDurban = null;
var mapWestville = null;

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function () {
    mapDurban.setCenter(new google.maps.LatLng(-29.7259947, 31.0636398));
    mapWestville.setCenter(new google.maps.LatLng(-29.8279293, 30.9280703));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-29.7259947, 31.0636398), // Durban

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        /*
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]*/
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElementDurban = document.getElementById('mapDurban');
    //var mapElementWestville = document.getElementById('mapWestville');

    // Create the Google Map using out element and options defined above
    mapDurban = new google.maps.Map(mapElementDurban, mapOptions);
    //mapWestville = new google.maps.Map(mapElementWestville, mapOptions);

    mapDurban.setCenter(new google.maps.LatLng(-29.7259947, 31.0636398));
    //mapWestville.setCenter(new google.maps.LatLng(-29.8279293, 30.9280703));

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    /*var image = 'img/map-marker.png';*/
    var myLatLngDurban = new google.maps.LatLng(-29.7259947, 31.0636398);
    //var myLatLngWestville = new google.maps.LatLng(-29.8279293, 30.9280703);

    var beachMarkerDurban = new google.maps.Marker({
        position: myLatLngDurban,
        map: mapDurban
        /*icon: image*/
    });
    //var beachMarkerWestville = new google.maps.Marker({
    //    position: myLatLngWestville,
    //    map: mapWestville
    //    /*icon: image*/
    //});
}

$(document).ready(function () {
    var isPhoneDevice = $(window).height() < 700;
    if (isPhoneDevice) {
        if (document.location.toString().indexOf('mobile') == -1) {
            document.location = 'mobile.html';
            return;
        }
    }
    else {
        if (document.location.toString().indexOf('mobile') != -1) {
            document.location = 'index.html';
            return;
        }
    }
    //if it is not a phone device...
    $('#fullpage').fullpage({
        /*sectionsColor: ['#000', '#1E1F0F', '#3C3F1E', '#5A5E2D', '#787D3C', '#979D4B', '#B5BC5A', '#D3DC69', '#F1FB78'],*/
        sectionsColor: ['#F1FB78', '#F1FB78', '#F1FB78', '#F1FB78'],
        anchors: ['intro', 'meetings', 'about', 'contact'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 500,
        afterLoad: function (anchorLink, index) {
            if (anchorLink == 'intro') {
                $('.navbar-custom').css('background-color', '#F1FB78');
                $('.navbar-custom a').css('color', 'black');
                $('.navbar-custom .nav li.active a').css('color', '#F1FB78');
            }
            else {
                $('.navbar-custom').css('background-color', '#1E1F0F');
                $('.navbar-custom a').css('color', '#F1FB78');
                $('.navbar-custom .nav li.active a').css('color', 'black');
            }
        }
    });
    updateNextMeetingTime();
    setTimeout(rotateImages, 3000);
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

// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function () {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

});

// When the window is resized
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