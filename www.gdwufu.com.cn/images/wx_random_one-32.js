//retired func
/*
//У��
ssjfc8866,ssjfd8866,ssjfa8866,nxa6677,ssjfe8866,nxa8800,sszd267,sszd6633,sszd5522,nxa8822,ssjfj8866,ssjfh8866,ssjfk8866,ssjfi8866,ssjfm8866,ssjff8899,co8566,nxa8877,ffs288,dej6288,nxa8989,nxa8833,ssjfb8866,nxa8811,kfr159,nxa8899,nxa8855,naxi288,nxa8687

/**************************************************/


//weixiarr����
var weixiarr="nxa8822,ssjfh8866,ssjfh8899,ssjfw8866,ssjfa8866,sszd267,ssjfm8866,ssjfs8866,nxa6677,ssjfr8866,ssjfr8899,ssjfd8899".split(',');
/*
//���ݷ�������ʾ  һ���ӻ�һ��
function inTurn(){
	var nowDate = new Date(),
		min = nowDate.getMinutes(),
		len = weixiarr.length;
		//console.log(len);
	
	 //* @param  {[type]} num �����ʱ��
	 //* @return {[type]}
	
	function con(){
		//����ȡģ�õ���������ֵ
		var index=min%len;
		//console.log(index);
		//��������ڵ�index��΢�ź�
		$(".public-name").text(weixiarr[index]);
		//console.log(weixiarr[index]);
	}
	con(min);
}
inTurn(); 
*/
//ˢ��ҳ�����һ��΢�ź�
function sj(){
	var numb = weixiarr.length;
	eq = Math.round(Math.random()*(numb-1));
	$(".public-name").text(weixiarr[eq]);
	//$(".public-Qr").attr("src",test[eq].QrCodeSrc);
}
sj();





