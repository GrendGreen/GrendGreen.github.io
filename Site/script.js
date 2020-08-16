jQuery('document').ready(function() { 

                 var gotop_scroll_start = 200;
		function gotop_scroll(){
    	if($(window).scrollTop()<gotop_scroll_start) $('.gototop').fadeOut(400);
    	else $('.gototop').fadeIn(300);
		}
			$(function(){
    			$('body').append('<div class="gototop" title="Наверх &uarr;"></div>');
   				 if($(window).scrollTop()>gotop_scroll_start) $('.gototop').show();
    			$(window).scroll(gotop_scroll);
    		$(".gototop").click(function(){$('html,body').animate({scrollTop:0})});
		})


 });         
