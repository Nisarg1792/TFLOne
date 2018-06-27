$(document).ready(function() {

  $( ".tflLogo" ).animate({
      opacity: 1,
      width: '42%',
    }, 500, function() {
    });

  $( ".tflLogo" ).delay(125).animate({
      opacity: 0,
    }, 500, function() {
    });

    $('.mainHidden').delay(1125).fadeIn(600);

  /* Vertical scroll of TFL map */

  var tflMap = $('.tflMap');
  img_height = tflMap.height(),
    window_height = $(window).height();

  function updatetflMapPosition(e) {
    var factor = (img_height - (4 * window_height)) / window_height,
      yheight = parseInt(e.clientY);
    if (factor < 1) {
      factor = 1;}
    tflMap.css('top', -(yheight * factor));}
  tflMap.on('mousemove', updatetflMapPosition);


  $(".fancybox").fancybox({
    openEffect: 'none',
    closeEffect: 'none'
  });

  $('#bakerMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.bakerHidden').delay(600).fadeIn(600);
  });

  $('#bakerButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.bakerHidden').delay(600).fadeIn(600);
  });

  $('#homeBaker').click(function() {
    $('.bakerHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

  $('#camdenMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.camdenHidden').delay(600).fadeIn(600);
  });

  $('#camdenButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.camdenHidden').delay(600).fadeIn(600);
  });

  $('#homeCamden').click(function() {
    $('.camdenHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

  $('#bridgeMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.bridgeHidden').delay(600).fadeIn(600);
  });

  $('#bridgeButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.bridgeHidden').delay(600).fadeIn(600);
  });

  $('#homeBridge').click(function() {
    $('.bridgeHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

  $('#leicesterMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.leicesterHidden').delay(600).fadeIn(600);
  });

  $('#leicesterButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.leicesterHidden').delay(600).fadeIn(600);
  });

  $('#homeLeicester').click(function() {
    $('.leicesterHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

  $('#oxfordMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.oxfordHidden').delay(600).fadeIn(600);
  });

  $('#oxfordButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.oxfordHidden').delay(600).fadeIn(600);
  });

  $('#homeOxford').click(function() {
    $('.oxfordHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

  $('#regentsMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.regentsHidden').delay(600).fadeIn(600);
  });

  $('#regentsButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.regentsHidden').delay(600).fadeIn(600);
  });

  $('#homeRegents').click(function() {
    $('.regentsHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

  $('#shoreditchMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.shoreditchHidden').delay(600).fadeIn(600);
  });

  $('#shoreditchButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.shoreditchHidden').delay(600).fadeIn(600);
  });

  $('#homeShoreditch').click(function() {
    $('.shoreditchHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });


  $('#waterlooMap').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.waterlooHidden').delay(600).fadeIn(600);
  });

  $('#waterlooButton').click(function() {
    $('.mainHidden').fadeOut(600);
    $('.waterlooHidden').delay(600).fadeIn(600);
  });

  $('#homeWaterloo').click(function() {
    $('.waterlooHidden').fadeOut(600);
    $('.mainHidden').delay(600).fadeIn(600);
  });

});
