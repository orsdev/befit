$(document).ready(function () {
 //add click event to element
 $('.icon-open').click(function () {

  //hide menu and show icon
  $('.toggle-open').css('display', 'none');
  $('.toggle-close').css('display', 'block');

  $('.toggle').animate({
   'left': '0'
  }).css('visibility', 'visible');

 });

 //add click event to element
 $('.icon-close').click(function () {

  //hide menu and show icon
  $('.toggle-open').css('display', 'block');
  $('.toggle-close').css('display', 'none');

  $('.toggle').animate({
   'left': '-250px'
  });

 });

 //close toggle when link is clicked
 $('.toggle').on('click', 'a', function () {
  //hide menu and show icon
  $('.toggle-open').css('display', 'block');
  $('.toggle-close').css('display', 'none');
  
  $('.toggle').animate({
   'left': '-250px'
  });
 });
});