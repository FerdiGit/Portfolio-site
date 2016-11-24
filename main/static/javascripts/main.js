$(document).ready(function () {

  // Particle Canvas Options
  var canvasDiv = document.getElementById('particle-canvas');
  var options = {
    particleColor: '#131618',
    background: '#E9EDEE',
    interactive: true,
    speed: 'fast',
    density: 'low'
  };

  var particleCanvas = new ParticleNetwork(canvasDiv, options);



  // Hamburger Menu Toggle
  $('.nav-icon').click(function() {
    $(this).toggleClass('open');
    $('.overlay-nav').toggleClass('overlay-nav-open');
  });



  // Skills Box Script
  $('.skill-box li').find('.bar').each(function (i) {
    $(this).find('b').text($(this).parent().attr('data-percent') + '%');
      return $(this).delay(i * 100).animate({ width: $(this).parent().attr('data-percent') + '%' }, 2000, function () {
        return $(this).find('b').fadeIn();
    });
  });



  // Rolldown List Script
  $('.rolldown-list li').each(function () {
    var delay = ($(this).index()/4) + 's';

    $(this).css({
      webkitAnimationDelay: delay,
      mozAnimationDelay: delay,
      animationDelay: delay
    });
  });

  $('.toggle').click(function () {
    var par = $(this).parent()
    par.toggleClass('rolldown-list-hide');
  });



  // Timeline script
  'use strict';

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

});

// Google map on contact page
function initMap() {
  // Setting the location
  var home = {lat: 51.606801, lng: -0.557771};

  // Initializing map and options
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: home
  });

  var featureOpts = [
    {
      stylers: [
        { hue: '#23F68C' },
        { gamma: 0.3 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        { color: '#f6238d' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#f6238d' }
      ]
    }
  ];

  map.setOptions({
    styles: featureOpts
  })


  // Creating the marker object
  var marker = new google.maps.Marker({
    position: home,
    map: map
  });
}
