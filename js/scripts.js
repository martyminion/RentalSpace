$(document).ready(function() {
  $('#hoverIcon1').click(function() {
    $('.amenitiesMarket').toggle();    
  });
  $('#hoverIcon2').click(function() {
    $('.amenitiesStaff').toggle();    
  });
  $('#hoverIcon3').click(function() {
    $('.amenitesSecurity').toggle();    
  });

  $('#location1').hover(function() {
    $('#locationName1').toggle();    
  });
  $('#location2').hover(function() {
    $('#locationName2').toggle();    
  });

});