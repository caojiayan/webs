//retired func
/*
//校验
ssjfc8866,ssjfd8866,ssjfa8866,nxa6677,ssjfe8866,nxa8800,sszd267,sszd6633,sszd5522,nxa8822,ssjfj8866,ssjfh8866,ssjfk8866,ssjfi8866,ssjfm8866,ssjff8899,co8566,nxa8877,ffs288,dej6288,nxa8989,nxa8833,ssjfb8866,nxa8811,kfr159,nxa8899,nxa8855,naxi288,nxa8687

/**************************************************/


//weixiarr数组
var weixiarr="nxa8822,ssjfh8866,ssjfh8899,ssjfw8866,ssjfa8866,sszd267,ssjfm8866,ssjfs8866,nxa6677,ssjfr8866,ssjfr8899,ssjfd8899".split(',');
/*
//根据分钟来显示  一分钟换一个
function inTurn(){
	var nowDate = new Date(),
		min = nowDate.getMinutes(),
		len = weixiarr.length;
		//console.log(len);
	
	 //* @param  {[type]} num 传入的时间
	 //* @return {[type]}
	
	function con(){
		//分钟取模得到数组索引值
		var index=min%len;
		//console.log(index);
		//输出数组内第index个微信号
		$(".public-name").text(weixiarr[index]);
		//console.log(weixiarr[index]);
	}
	con(min);
}
inTurn(); 
*/
//刷新页面随机一个微信号
function sj(){
	var numb = weixiarr.length;
	eq = Math.round(Math.random()*(numb-1));
	$(".public-name").text(weixiarr[eq]);
	//$(".public-Qr").attr("src",test[eq].QrCodeSrc);
}
sj();





