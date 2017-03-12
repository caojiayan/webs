/**
 * ====================================
 * 地区联动通用脚本文件
 * ====================================
 * Author: 林毅麟
 * Date: 2015 2015/8/6 16:22
 * ====================================
 * File: region.js
 * ====================================
 * Usage：
 * 	引入jquery库、region.js脚本文件，加入以下两行代码：
 * 	Region.init('地区PHP控制器URL', '省份SELECT控件ID', '城市ID', '地区ID');
 *  Region.firstLoad([省份默认值], [城市默认值], [地区默认值]);
 */


Region = {
	url : null,
	province : null,
	city : null,
	district : null,
	
	defs : {
		province : 0,
		city : 0,
		district : 0
	},
	
	init : function(url, province, city, district){
		this.url = url;
		this.province = province;
		this.city = city;
		this.district = district;
	},
	firstLoad : function(val1, val2, val3){

		this.setDefault(val1, val2, val3);
		
		var _this = this;
		
		$(document).delegate("#" + this.province, "change", function(){
			_this.setDefault($(this).val(), 0, 0);
			_this._trigger($(this).val(), _this.province);
		});
		$(document).delegate("#" + this.city, "change", function(){
			_this.setDefault(null, $(this).val(), 0);
			_this._trigger($(this).val(), _this.city);			
		});
		$(document).delegate("#" + this.district, "change", function(){
			//TODO MORE...
		});
		
		//默认以中国作为顶级节点
		this._loadDatas(1, this.province);
		
		//省份有默认值
		if(parseInt(this.defs['province']) > 0){
			this._trigger(this.defs['province'], this.province);
		}
	},
	setDefault : function(val1, val2, val3){
		this.defs.province = (typeof val1 != "undefined" && val1 != null) ? val1 : this.defs.province;
		this.defs.city = (typeof val2 != "undefined" && val2 != null) ? val2 : this.defs.city;
		this.defs.district = (typeof val3 != "undefined" && val3 != null) ? val3 : this.defs.district;
	},
	_trigger : function(id, action){
		
		//省份改变选项
		if(action == this.province){
			_this = this;
			this._loadDatas(id, this.city, function(){
				//城市有默认
				if(parseInt(_this.defs['city']) > 0){
					_this._trigger(_this.defs['city'], _this.city);
				}
			});
			this._defOption(this.district);
		//城市改变选项
		}else if(action == this.city){
			this._loadDatas(id, this.district);
		//TODO MORE...
		}else{
			
		}
	},	
	_loadDatas : function(id, action, func){
		var _this = this;
		$.get(this.url, {"id":id, "action":action}, function(result){
			_this._defOption(action);
			if(result==""){
				$('#area').css('display','none');
				$('span.area').css('display','none');
				Consignee.setRule({
					"district": {required:false, error:{"required":"请选择辖区"}},
				});
			}else{
				$('#area').css('display','block');
				$('span.area').css('display','inline-block');
				Consignee.setRule({
					"district": {required:true, error:{"required":"请选择辖区"}},
				});
				for(var i=0; i<result.length; i++){
					var selected = _this.defs[action] == result[i].id ? "selected" : "";
					$("#"+action).append('<option value="'+result[i].id+'" '+selected+'>'+result[i].text+'</option>');
				}
			}
			if(typeof func == "function"){
				func.call(this);
			}
		}, "json");		
	},
	_defOption : function(selId){
		var langs = {province:"请选择省", city:"请选择市", district:"请选择区"};
		$("#"+selId).empty();
		$("#"+selId).append('<option value="">'+langs[selId]+'</option>');
	}
};
