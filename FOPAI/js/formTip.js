//表单验证
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
var bm  = getQueryString("bm");
var cid = getQueryString("cid");

function checkdg() {
	
	if (hanzi(trim($el("username2").value)).length>10 || hanzi(trim($el("username2").value)).length<1 ) { 
		$el("username2").focus();
		alert("请正确填写用户名，以便我们方便联系您！");
		return false;
	}
	
	if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(trim($el("mobile2").value)))||trim($el("mobile2").value).length !=11){ 
	 $el("mobile2").focus();
     alert("您的电话输入有误，请重新填写！"); 
     return false; 
	}

	if(document.getElementById('s_province').value=='省份'){
		alert("请选择省份");
		return false;
		
	}
	if(document.getElementById('s_city').value=='城市'){
		alert("请选择城市");
		return false;
	}
	if(document.getElementById('s_county').value=='地区'){
		alert("请选择地区");
		return false;
	}
	
	if (trim($el("addr2").value).length<3)  {
		$el("addr2").focus();
		alert("请详细填写您的街道地址（3个文字以上），以便我们方便联系您！");
		return false;
	}
		//获取产品信息
		checkb = $("input[name='productPlanId2']:checked").val();
		console.log(checkb);
		//获取用户名
		txtName = $("#username2").val();
		//获取手机号码
		txtMob= $("#mobile2").val();
		//获取省份
		txtProvince=$("#s_province option:selected").val();
		//获取城市
		txtCity=$("#s_city option:selected").val();
		//获取地区
		txtRegion=$("#s_county option:selected").val();
		//详细地址
		txtPlace=$("#addr2").val();
		//总地址
		txtAddress=txtProvince+txtCity+txtRegion+txtPlace;
		//获取留言
		txtGust= $("#textareaGusta").text();
		//获取价格
		wfmon=198; 
		$.post("/index.php/Home/Index/order",{'checkb':checkb,'txtName':txtName,'txtMob':txtMob,'txtAddress':txtAddress,'txtGust':txtGust,'hdmon':wfmon},function(data){
			if(data==1){
                alert("奉请成功");
                document.getElementById('wfform').reset();  
            }else{
                alert("奉请失败！请重试");
            }
	});
}

function $el(name) { 
	return document.getElementById(name);
}

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
} 

function hanzi(str){
	return str.replace(/[^\u4E00-\u9FA5]/g,''); 
}

