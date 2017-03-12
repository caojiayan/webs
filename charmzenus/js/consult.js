/**
 * QQ咨询跟商务通
 * author: 邱子棋
 * create_time: 2016-2-25
 */


var Online = {
		
	qq : false,
	
	business : false,

	baidu : false,
	
	baiduPram : '',
	
	qqNum : '',
	
	//qqType enterprise企业Q号   private私人Q号
	qqType : '',
		
	//id html标签id    
	obj : [
	       	{'id':'floatQQ'},
	       	{'id':'floatbotQQ'},
	       	{'id':'t_chatQQ01'},
	       	{'id':'t_chatQQ02'},
	       	{'id':'t_chatQQ03'},
	       	{'id':'t_chatQQ04'},
	       	{'id':'t_chatQQ05'},
	       	{'id':'t_chatQQ06'},
	       	{'id':'t_chatQQ07'},
	       	{'id':'t_chatQQ08'},
            {'id':'t_chatQQ09'},
            {'id':'t_chatQQ10'},
            {'id':'t_chatQQ11'},
            {'id':'t_chatQQ12'},
            {'id':'t_chatQQ13'},
            {'id':'t_chatQQ14'},
            {'id':'t_chatQQ15'},
            {'id':'t_chatQQ16'},
            {'id':'t_chatQQ18'},
            {'id':'t_chatQQ19'},
            {'id':'t_chatQQ20'},
            {'id':'t_chatQQ21'},
            {'id':'t_chatQQ22'},
            {'id':'t_chatQQ23'},
            {'id':'t_chatQQ24'},
            {'id':'t_chatQQ25'},
            {'id':'t_chatQQ26'},
            {'id':'t_chatQQ27'},
            {'id':'t_chatQQ28'},
            {'id':'t_chatQQ29'},
            {'id':'t_chatQQ30'},
            {'id':'t_chatQQ31'},

    ],
	
	qqObj : [],
	
	_main : function(){
		var _self = this;

		$('body').on('click', function(e){
			for(var i=0; i<_self.obj.length; i++) {
				if(e.target && (e.target.id == _self.obj[i].id)) {
					_self.business && _self._clickBusiness();
					(_self.qq && _self.qqType=='private') && _self.clickEve(_self.obj[i]);
					_self.baidu && _self._clickBaidu();
				}
			}
		});
		
		//初始化QQ的对象
		_self.qq && _self.groupItem(_self.obj);
		
		(_self.qq && _self.qqType=='enterprise') && _self.clickEntp();

	},
	
	_clickBusiness : function() {
		openZoosUrl();
		return false;
	},

	_clickBaidu : function() {
		window.open('http://p.qiao.baidu.com//im/index?'+this.baiduPram, "");
	},
	
	//判断QQ类型，执行不同的方法
//	_qqType : function() {
//		var _self = this;
//		if(_self.qqType == 'private') {
//			_self.clickEve();
//		} else {
//			_self.clickEntp();
//		}
//	},
	
	//私人QQ
	clickEve : function(param) {
		var _self = this;
		if(param != 'undefined') {
			window.open('http://wpa.qq.com/msgrd?v=3&uin='+this.qqNum+'&site=qq&menu=yes');
		}
	},
	
	//企业QQ
	clickEntp : function() {
		BizQQWPA.addCustom(this.qqObj);
	},
	
	groupItem : function() {
		var _self = this;
		for(var i=0; i<_self.obj.length; i++) {
			_self.qqObj.push({aty: '0', a: '0', nameAccount:this.qqNum, selector: _self.obj[i].id});
		}
	}
};

