//提交订单
$(document).ready(function(){
   $("#submit").on('click',function(){
		//获取产品
		var checkb = $("input[name='wfproduct']:checked").val();
		//获取用户名
		var txtName = $("input[name='wfname']").val();
		//获取手机号码
		var txtMob= $("input[name='wfmob']").val();
		//详细地址
		var txtAddress= $("#wfaddressile").val();
		
		console.log(txtAddress);
		//获取留言
		var txtGust= $("#textareaGusta").text();
		//获取价格
		var wfmon=198;
		
		var url='http://localhost:8080/WorkGroupManagment/open/getGroupById?id=1&callback=?';
		

		
		$.post("/index.php/Home/Index/order",{'checkb':checkb,'txtName':txtName,'txtMob':txtMob,'txtAddress':txtAddress,'txtGust':txtGust,'hdmon':wfmon},function(data){
                    if(data==1){
                    
                        $(data).html("提交成功！");   
                    }else{
                        $(data).html("提交成功！");
                      }
			
		});
		
		
	});
});