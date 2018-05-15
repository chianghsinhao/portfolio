jQuery(document).ready(function(e) {

$('#header-logo').mouseover(function(){
  $(this).addClass('logo-hover');
});

$('#header-logo').mouseout(function(){
  $(this).removeClass('logo-hover');
});

$('.project-name').mouseover(function(){
  $(this).addClass('project-name-hover');
});

$('.project-name').mouseout(function(){
  $(this).removeClass('project-name-hover');
});

});
