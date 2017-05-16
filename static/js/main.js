$(document).ready(function() {
  setTimeout(function() {
    $('.landing-image').append("<h1 class='landing-description center-align zoomInDown animated'>full-stack web developer</h1>");
  }, 1500);
  var options = [
    {selector: '#about-text', offset: 120, callback: function(el) {
      $(el).addClass('fadeInLeft animated');
      setTimeout(function() {
        Materialize.fadeInImage("#self-portrait");
      }, 1000);
      setTimeout(function() {
        Materialize.fadeInImage("#about-me-text");
        $("#about-me-text").addClass("bounceInDown animated");
      }, 500);
    }},
    {selector: '#project-text', offset: 300, callback: function(el) {
      Materialize.fadeInImage($(el));
      $(el).addClass('slideInDown animated');
      setTimeout(function() {
        $("#project-list").addClass('fadeIn animated');
        $("#project-tooltip").addClass('fadeIn animated');
      }, 1000);
    }},
    {selector: '#tech-text', offset: 400, callback: function(el) {
      Materialize.fadeInImage($(el));
      $(el).addClass('fadeInLeft animated');
      setTimeout(function() {
        Materialize.showStaggeredList($("#staggered-stacks"));
      }, 1000);
      setTimeout(function() {
        Materialize.showStaggeredList($("#staggered-stacks2"));
      }, 2000);
    }},
    {selector: '#contact-header', offset: 300, callback: function(el) {
      $(el).addClass('fadeIn animated');
      setTimeout(function() {
        $('#contact-text').addClass('fadeIn animated');
      }, 1000);
      setTimeout(function() {
        $('#to-top2').addClass('fadeIn animated');
      }, 2000);
    }},
  ];
  Materialize.scrollFire(options);
	$('.parallax').parallax();
  $('#to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });
  $('#to-top2').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 700);
  });
  $('#to-about-me').click(function() {
    $('html, body').animate({ scrollTop: $('#about-me').offset().top }, 700);
  });
  $('#to-projects').click(function() {
    $('html, body').animate({ scrollTop: $('#projects').offset().top }, 700);
  });
  $('#to-technologies').click(function() {
    $('html, body').animate({ scrollTop: $('#technologies').offset().top }, 700);
  });
  $('#to-contact').click(function() {
    $('html, body').animate({ scrollTop: $('#contact').offset().top }, 700);
  });
});
