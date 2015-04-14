;
// PLAYER
	var vol;
		vol = .5;
	var play = function() {
		htmlplayer.volume=vol
		htmlplayer.play();    
	    return false; 
	}
	var pause = function() {
		document.getElementById('htmlplayer').src = 'http://s5.radioheart.ru:8019/live';
	    return false; 
	}
	var volumeup = function() {
		htmlplayer.volume+=0.1;
		vol = htmlplayer.volume
	}
	var volumedown = function() {
		htmlplayer.volume-=0.1;
		vol = htmlplayer.volume
	}
// 

// HOTKEYS
// 
// 
$(document).ready(function(){
         $(window).keyup(function (event) {   
            if ( event.keyCode == 87 ) { play(); 
				$('.player-songname').addClass('is-play');
				$('.hr-mob').addClass('hr-is-play');
				$('.player-logo-m').addClass('logo-is-play');
			; } //;w
            if ( event.keyCode == 83 ) { pause();
            	$('.player-songname').removeClass('is-play');
				$('.hr-mob').removeClass('hr-is-play');
				$('.player-logo-m').removeClass('logo-is-play');
			;} //s    
            if ( event.keyCode == 68 ) volumeup(); //d    
            if ( event.keyCode == 65 ) volumedown(); //a    
         });
      });
// 

//  SONGNAME
	function nowplay()
	{
	   $.ajax({
	       url: "php/radiostat.php",  
	       cache: false,
	       success: function(html){
	           $("#player_songname").html(html); 
	       }
	   });
	}
	$(document).ready(function(){
	   nowplay();
	   setInterval('nowplay()',5000);  
	});

	jQuery(document).ready(function($){
			$('.player-button-play').on('click', function(event){
				event.preventDefault();
				$('.player-songname').addClass('is-play');
				$('.hr-mob').addClass('hr-is-play');
				$('.player-logo-m').addClass('logo-is-play');
			});
			
			$('.player-button-pause').on('click', function(event){
				event.preventDefault();
				$('.player-songname').removeClass('is-play');
				$('.hr-mob').removeClass('hr-is-play');
				$('.player-logo-m').removeClass('logo-is-play');
			});
		});

// 

// WOW JS
	new WOW().init();
// 

// FASTCLICK
	window.addEventListener('load', function() {
	    new FastClick(document.body);
	}, false);
// 

// POPUP
	jQuery(document).ready(function($){
				//open popup
				$('.modal-trigger').on('click', function(event){
					event.preventDefault();
					$('.modal').addClass('is-visible');
				});
				
				//close popup
				$('.modal').on('click', function(event){
					if( $(event.target).is('.modal-close') || $(event.target).is('.modal') ) {
						event.preventDefault();
						$(this).removeClass('is-visible');
					}
				});
				//close popup when clicking the esc keyboard button
				$(document).keyup(function(event){
			    	if(event.which=='27'){
			    		$('.modal').removeClass('is-visible');
				    }
			    });
			});
// 


// YA.METRICA
	(function (d, w, c) {
	    (w[c] = w[c] || []).push(function() {
	    try {
	    w.yaCounter23746645 = new Ya.Metrika({id:23746645,
	            webvisor:true,
	            clickmap:true,
	            trackLinks:true,
	            accurateTrackBounce:true});
	    } catch(e) { }
	    });

	    var n = d.getElementsByTagName("script")[0],
	    s = d.createElement("script"),
	    f = function () { n.parentNode.insertBefore(s, n); };
	    s.type = "text/javascript";
	    s.async = true;
	    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

	    if (w.opera == "[object Opera]") {
	    d.addEventListener("DOMContentLoaded", f, false);
	    } else { f(); }
	    })(document, window, "yandex_metrika_callbacks");
// 


// FULLSCREEN
(function () {
    var viewFullScreen = document.getElementById("view-fullscreen");
    if (viewFullScreen) {
        viewFullScreen.addEventListener("click", function () {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
        }, false);
    }

    var cancelFullScreen = document.getElementById("cancel-fullscreen");
    if (cancelFullScreen) {
        cancelFullScreen.addEventListener("click", function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }, false);
    }

})();


	jQuery(document).ready(function($){
			$('.fa-expand').on('click', function(event){
				event.preventDefault();
				$('.fa-compress').addClass('is-visible');
				$('.fa-expand').addClass('is-hidden');
				$('.fa-expand').removeClass('is-visible');
				$('.fa-compress').removeClass('is-hidden');
			});
			
			$('.fa-compress').on('click', function(event){
				event.preventDefault();
				$('.fa-compress').removeClass('is-visible');
				$('.fa-expand').removeClass('is-hidden');
				$('.fa-expand').addClass('is-visible');
				$('.fa-compress').addClass('is-hidden');
			});
		});

// 
// 


