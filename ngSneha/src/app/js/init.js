

(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true, indicators: true
    });
     $('.modal').modal();
    $('select').formSelect();
  }); // end of document ready
})(jQuery); // end of jQuery name space
