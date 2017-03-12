$(document).ready(function(){
//	$("img").each(function(){
//		var isH = $(this).height(),isW = $(this).width();
//		$(this).css({"width":isW,"height":isH})
//	});
    var $body = $('body');
	var W_height=$(window).height();
	var navheight=$(".nav-aside").height();
	//	alert(parseInt(navheight))
    function disableScroll(e) {
        e.preventDefault();
    }
    $('#panelSwitch').click(function(){
        if($body.hasClass('panel-active')){
            $body.removeClass('panel-active');
            $(".main").off('touchmove', disableScroll);
			$(".nav_fixed").removeClass("on")
		}else{
				$body.addClass('panel-active');
				$(".main").on('touchmove', disableScroll);
				$(".nav_fixed").addClass("on")
			}
	//	$(".nav_fixed").toggleClass("on")
    });

    //$(".nav_fixed span").eq(0).addClass("current");
    $(".nav_fixed span").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
    }); 
   
});
