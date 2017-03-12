/**
 * ====================================
 * 购物车处理脚本文件
 * ====================================
 * Author: 林毅麟
 * Date: 2015 2015/8/6 16:22
 * ====================================
 * File: cart.js
 * ====================================
 */


/**
 * 添加到购物车
 * @param goodsId
 * @param number
 * @param attr
 * @param callFunc
 */
function addToCart(url, goodsId, number, attrs, callFunc){
	
	attrs = (typeof attrs) != "object" ? [] : attrs;
	callFunc = (typeof callFunc) != "function" ? addToCartResponse : callFunc;
		
	var attrObject = new Object();
	for(var i=0; i<attrs.length; i++){
		attrObject[i] = attrs[i];
	}
	
	var postData = {
		"goods_id" : goodsId,
		"number" : number,
		"attrs" : JSON.stringify(attrObject)
	};
	
	$.post(url, postData, callFunc, "json")	
}

/**
 * 添加到购物车（自定义参数）
 * @param goodsId
 * @param params	（包括数量，商品属性，其他参数）
 * @param callFunc
 */
function addToCartNew(url, params, callFunc){
	
	attrs = (typeof attrs) != "object" ? [] : attrs;
	callFunc = (typeof callFunc) != "function" ? addToCartResponse : callFunc;
		
	var attrObject = new Object();
	for(var i=0; i<params.attrs.length; i++){
		attrObject[i] = params.attrs[i];
	}
	
	params.attrs = JSON.stringify(attrObject);
	var postData = params;
	
	$.post(url, postData, callFunc, "json")	
}

/**
 * 购物车添加结果返回处理方法
 * @param result
 */
function addToCartResponse(result){
	
	//添加到购物车成功
	if(result.status == 1){
		
	//添加到购物车失败
	}else{

	}
	
	alert(result.info);
}

/**
 * 显示浮动框
 * @param htmlDiv
 */
function showFloatDiv(htmlDiv){
	if($("#body_mask").length > 0){
		$("#body_mask").show();
	}else{
		var htmlMask = '<div style="position:absolute; top: 0px; left: 0px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; z-index: 9999998; opacity: 0.7;" id="body_mask"></div>';
		$("body").append(htmlMask)
	}

	$("#body_mask").css("width", $("body").width()+"px");
	$("#body_mask").css("height", $("body").height()+"px");
	
	if($("#float_container").length > 0){
		$("#float_container").html(htmlDiv);
	}else{
		$("body").append('<div style="padding:0px 0px;position: absolute;display:none;z-index:9999999;" id="float_container">'+htmlDiv+'</div>');
	}
	
	var clientWidth = $(window).width();
	var clientHeight = $(window).height();
	var scrollLeft = $(window).scrollLeft();
	var scrollTop = $(window).scrollTop();
	
	var floatWidth = $("#float_container").width();
	var floatHeight = $("#float_container").height();
	
	var offsetLeft = (clientWidth - floatWidth)/2 + scrollLeft;
	var offsetTop = (clientHeight - floatHeight)/2 + scrollTop;
	
	$("#float_container").css("left", offsetLeft + "px");
	$("#float_container").css("top", offsetTop + "px");
	$("#float_container").show();
}

/**
 * 关闭浮动框
 */
function closeFloatDiv(){
	$("#body_mask").hide();
	$("#float_container").hide();
}