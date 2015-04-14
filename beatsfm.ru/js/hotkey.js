$(document).ready(function(){
      
         $(window).keyup(function (event) {
         
            if ( event.keyCode == 39 ) $('audio').play(); //arrow right keyup
         
         });
      
      });