		var p_arr=[['张若诗','http://i.13e13e.cn/image/ssdr2.jpg','若诗',['ssweixin3301','ssweixin3323','ssweixin3325']],
				   ['张若诗','http://i.13e13e.cn/image/ssdr2.jpg','若诗',['ssweixin3301','ssweixin3323','ssweixin3325']]];
		var p_index=Math.floor((Math.random()*p_arr.length));
		var pList=p_arr[p_index];
		var pic1=pList[1];
		var name=pList[2];
		
		arr_wx=pList[3];
		var wx_index = Math.floor((Math.random()*arr_wx.length));
		var stxlwx = arr_wx[wx_index];	
		var img = arr_wx[wx_index]+".jpg";
		var wx_img = "<img src='http://i.13e13e.cn/image/"+img+"' style='margin:0 auto;'>";