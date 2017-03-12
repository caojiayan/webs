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

    $('.title_bar a').click(function(){history.back(); return false;});

    //弹出左边菜单栏
    $(".left_menu_btn").click(function () {
    	
        $(this).toggleClass("on");

        //显示左侧菜单
        if($(".left_menu_btn").hasClass("on")){
        	showLeftMenu();
        //隐藏左侧菜单
        }else{
        	hideLeftMenu();
        }
    });
    //隐藏左侧菜单
    $("body").click(function (e) {
        var e_menu = !$(e.target).hasClass("left_menu_btn") && !$(e.target).hasClass("panel") && !$(e.target).parent().hasClass("left_menu_btn");
        if(e_menu){
            hideLeftMenu();
        }
    });
});

//显示左侧菜单
function showLeftMenu(){
    $("#leftMenu").show();
}

//隐藏左侧菜单
function hideLeftMenu(){
	$(".left_menu_btn").removeClass("on");
	$("#leftMenu").hide();
}