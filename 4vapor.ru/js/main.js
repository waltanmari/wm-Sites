
window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);


$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 500);
      e.preventDefault();
   });
   return false;
});
