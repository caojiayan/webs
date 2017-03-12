/**
 * ====================================
 * 商品购物处理通用脚本文件
 * ====================================
 * Author: 林毅麟
 * Date: 2015 2015/7/30 16:22
 * ====================================
 * File: goods.js
 * ====================================
 */


/**
 * 商品规格属性处理类
 * ------------------------------------
 * 使用：
 * var obj = new AttrValidation();
 * obj.setInit(datas, groups);
 * 
 *	参数说明：
 *   groups 属性数组 
 *    例:
 *   	[[1,2],[3,4],[5,6]]
 *   
 *   datas 规格组合可用组
 *    例:
 *      [[1,3,6],[1,4,5],[2,3,5]]
 */
function AttrValidation(){
	this.datas = null;
	this.groups = null;
	this.checkeds = [];
	this.allows = [];
	this.disableds = [];
}

//设置验证数据
AttrValidation.prototype.setInit = function(datas, groups){
	this.datas = datas;
	this.groups = groups;
	//this.generateGroups();
	
}
//生成所有组合
AttrValidation.prototype.generateGroups = function(){
	var groups = [];
	
	var _groupPush = function(arr){
		_groups = [];
		if(groups.length <= 0){
			for(var i=0; i < arr.length; i++){
				_groups.push([arr[i]]);
			}
		}else{
			for(var i=0; i < groups.length; i++){
				for(var j=0; j < arr.length; j++){
					var tmps = [];
					for(var x=0; x < groups[i].length; x++){
						tmps.push(groups[i][x]);
					}
					tmps.push(arr[j]);
					tmps.sort();
					_groups.push(tmps);
				}
			}
		}
		return _groups;
	}
	
	for(var i=0; i < this.groups.length; i++){
		groups = _groupPush(this.groups[i]);
	}

	this.groups = groups;
}
//加入一个Checked值
AttrValidation.prototype.checkedPush = function(val){
	this.checkeds.push(parseInt(val));
}
//删除一个Checked值
AttrValidation.prototype.checkedPop = function(val){
	var tmps = [];
	for(var i=0; i < this.checkeds.length; i++){
		if(this.checkeds[i] != parseInt(val)){
			tmps.push(this.checkeds[i]);
		}
	}
	this.checkeds = tmps;
}
//验证可用的值
AttrValidation.prototype.validatedAllow = function(){
	//如果选择值为空，假设所有值都可用
	if(this.checkeds.length <= 0){
		for(var i=0; i < this.datas.length; i++){
			this.allows = this.pushArray(this.allows, this.datas[i]);
		}
		return this.allows;
	}
	
	var allows = [];
	var allowGroups = [];
	var groupLen = this.groups.length;

	for(var i=0; i < this.checkeds.length; i++){
		if((i+1) == this.checkeds.length && groupLen != this.checkeds.length
			|| this.checkeds.length == 1){
			var groupArr = this.getGroup(this.checkeds[i]);
			allows = this.pushArray(allows, groupArr);
		}
		allowGroups.push(this.getMayAllows(this.checkeds[i]));
	}
	
	this.allows = this.pushArray(allows, this.getArrayISE(allowGroups));
	
	return this.allows;
	
}
//获取多维数组的交集值
AttrValidation.prototype.getArrayISE = function(arrGroup){ 
	if(arrGroup.length <= 0)
		return [];
	
	var groupLen = arrGroup.length;
	var result = [];
	var hashs = [];
	
	var _hashPush = function(val){
		for(var i=0; i < hashs.length; i++){
			if(hashs[i].val == val){ 
				hashs[i].num += 1;
				return;
			}
		}
		hashs.push({"val": val, "num":1});
	}
	
	for(var i=0; i < arrGroup.length; i++){
		var arr = arrGroup[i];
		for(var j=0; j<arr.length; j++){
			_hashPush(arr[j]);
		}
	}
	
	for(var i=0; i < hashs.length; i++){
		if(hashs[i].num >= groupLen){
			result.push(hashs[i].val);
		}
	}	
	
	return result;
} 
//获取可能不可用的值
AttrValidation.prototype.getMayAllows = function(val){
	var allows = [];
	for(var i=0; i < this.datas.length; i++){
		if(this.inArray(val, this.datas[i])){
			allows = this.pushArray(allows, this.datas[i]);
		}
	}
	return allows;
}
//通过值获得对应的属性组
AttrValidation.prototype.getGroup = function(val){
	var group = [];
	for(key in this.groups){
		if(this.inArray(val, this.groups[key])){
			group = this.groups[key];
			break;
		}
	}
	return group
}
//整个数组添加到另一个数组中
AttrValidation.prototype.pushArray = function(sArr, pArr){
	for(var i=0; i < pArr.length; i++){
		if(!this.inArray(pArr[i], sArr)){
			sArr.push(pArr[i]);
		}
	}
	return sArr;
}
//是否在数组中
AttrValidation.prototype.inArray = function(n, arr2){
	var arr = new Array();
	if(typeof n != "object"){
		arr.push(n);
	}else{
		arr = this.pushArray(arr, n);
	}

	//假设在数组中
	var valid = true;

	while(arr.length>0 && valid){
		var ck = arr.shift();
		var b = false;
		for(var i=0; i<arr2.length; i++){
			if(arr2[i] == ck){
				b = true;
				break;
			}
		}
		
		valid = b;
	}

	return valid;	
}

/**
 * 选择商品规格属性处理
 * @param cDom
 */
function checkedAttrStock(container, cDom, Validation, func){
	
	var checked = $(cDom).prop("checked");
	
	$(cDom).closest(".attribute-options").find(".attribute-item").prop("checked", false);
	$(cDom).prop("checked", checked);
	
	var val = $(cDom).val();
	
	if(checked){
		$(cDom).closest(".attribute-options").find(".attribute-item").each(function(){
			Validation.checkedPop($(this).val());
		});
		Validation.checkedPush(val);
	}else{
		Validation.checkedPop(val);
	}

	var allows = Validation.validatedAllow();
	
	container.find(".attribute-item").each(function(){
		var val = parseInt($(this).val());

//		console.log(val);
//		console.log(allows);
//		console.log(Validation.inArray(val, allows));
		var disabled = false;
		if(Validation.inArray(val, allows)){
			$(this).attr("disabled", false);
			disabled = false;
		}else{
			$(this).attr("disabled", true);
			$(this).prop("checked", false);
			disabled = true;
		}

		if(typeof func == "function"){
			func.call(this, $(this), disabled);
		}
	})
}

/**
 * AJAX分页数据加载
 * @param url		数据URL地址
 * @param page		当前页码
 * @param size		每页获取数量	
 * @param param		附带参数
 * @param func		回调函数
 */
function getDataList(url, page, size, param, func, dataType){
	var data = {};
	if(typeof param == "object"){
		for(k in param){
			data[k] = param[k];
		}
	}
	data['page'] = page;
	data['size'] = size;

	dataType = typeof dataType == "undefined" ? "json" : "text";
	
	$.get(url, data, function(result){
		if(result.status == 1 || dataType == "text"){
			if(typeof func == "function"){
				func.call(this, result);
			}
		}else{
			
		}
	}, dataType)
}

/**
 * 增减购买商品数量
 * @param domId		输入框元素ID
 * @param val		增减值
 * @return bool
 */
function buyNumberChange(domId, val){
	var number = document.getElementById(domId).value;
	var oldNum = number;
	
	number = number.replace(/\s+/g, "");
	number = (isNaN(number) || number.length<=0 
			 || parseInt(number<=0)) ? 0 : parseInt(number);
	number = number + val;
	number = number <= 0 ? 1 : number;

	document.getElementById(domId).value = number;
}

/**
 * 购买数量改变时处理函数
 * @param dom	输入框元素对象
 */
function buyNumberCheck(dom){
	var number = dom.value;
	number = number.replace(/[^0-9]+/g, "");
	dom.value = number;
	
	return parseInt(number) > 0;
}

/**
 * 收藏商品
 * @param url		处理控制器URL	
 * @param goodsId	商品ID
 * @param count		是否增加收藏数
 * @param func 		自定义处理方法
 */
function collectGoods(url, goodsId, bCount, func){
	
	bCount = (typeof bCount) != "undefined" ? bCount : false;

	$.post(url, {"goods_id":goodsId}, function(result){
		if(result.status == 1){
			if(bCount){
				var collects = $.trim($("#collectGoods_" + goodsId).html());
				if(collects.length > 0 && !isNaN(collects)){
					collects = parseInt(collects) + 1;
					$("#collectGoods_" + goodsId).html(collects)
				}
			}
			if(typeof func == "function"){
				func.call(this, result);
			}else{
				alert("商品收藏成功");
			}
		}else{
			alert(result.info);
		}
	}, "json");
	
}
