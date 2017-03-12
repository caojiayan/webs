/**
 * 获取网页复制动作
 * oncopy="getCopyLog(this,position)"
 * @param string text
 */
function getCopyLog(res,position){
	//<script type="text/javascript" src="public/zt/zt.js"></script>
	//<input type="hidden" id="hosturl" value="{$hosturl}">
	// 以上两句都要复制到页面上
	if(window.getSelection){
		var thisVal = window.getSelection();
	}else{
		var thisVal = document.selection.createRange().text;
	}

	var res1 = $(res).text();
	res1 = $.trim(res1);
    if(res1 != $.trim(thisVal))return;
    var position = $.trim(position);
	var host = $('input#hosturl').val();
    if(!thisVal || !position || !host)return;
    var url = '/special/getCopyLog';

	$.post(url,{'position':position,'host':host,'wechat':res1},function(res2){
		if(res2.code == 0)
		return true;
	})
}