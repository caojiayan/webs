/**
 * 流量统计
 * author: 邱子棋
 * create_time: 2016/3/17
 */
$(function(){
	flow._init();
});

var flow = {
		
		wechat : false,
		
		/**
		 * 参数说明
		 * id:	标签里的id
		 * 
		 * ga('send', 'pageview', {'page': '/online_qq_article_2','title': '在线咨询_文章2'});
		 * type:	是'pageview'
		 * page:	是'/online_qq_article_2'
		 * title:	是''在线咨询_文章2'	
		 */
		obj : [
		       		{'id':'floatQQ', 'type':'pageview', 'page':'/online_qq_right', 'title': '右侧_咨询'},
                    {'id':'floatbotQQ', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '底部_咨询'},

		       		{'id':'t_chatQQ01', 'type':'pageview', 'page':'/online_qq_article_1', 'title': '在线咨询_文章1'},
		       		{'id':'t_chatQQ02', 'type':'pageview', 'page':'/online_qq_article_2', 'title': '在线咨询_文章2'},
		       		{'id':'t_chatQQ03', 'type':'pageview', 'page':'/online_qq_article_3', 'title': '在线咨询_文章3'},
		       		{'id':'t_chatQQ04', 'type':'pageview', 'page':'/online_qq_article_4', 'title': '在线咨询_文章4'},
		       		{'id':'t_chatQQ05', 'type':'pageview', 'page':'/online_qq_article_5', 'title': '在线咨询_文章5'},
		       		{'id':'t_chatQQ06', 'type':'pageview', 'page':'/online_qq_article_6', 'title': '在线咨询_文章6'},
		       		{'id':'t_chatQQ07', 'type':'pageview', 'page':'/online_qq_article_7', 'title': '在线咨询_文章7'},
		       		{'id':'t_chatQQ08', 'type':'pageview', 'page':'/online_qq_article_8', 'title': '在线咨询_文章8'},
		       		{'id':'t_chatQQ09', 'type':'pageview', 'page':'/online_qq_article_9', 'title': '在线咨询_文章9'},
		       		{'id':'t_chatQQ10', 'type':'pageview', 'page':'/online_qq_article_10', 'title': '在线咨询_文章10'},
		       		
		       		{'id':'t_chatQQ11', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片11'},
		       		{'id':'t_chatQQ12', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片12'},
					{'id':'t_chatQQ13', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片13'},
					{'id':'t_chatQQ14', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片14'},
					{'id':'t_chatQQ15', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片15'},
					{'id':'t_chatQQ16', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片16'},
					{'id':'t_chatQQ17', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片17'},
					{'id':'t_chatQQ18', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片18'},
					{'id':'t_chatQQ19', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片19'},
					{'id':'t_chatQQ20', 'type':'pageview', 'page':'/online_qq_bottom', 'title': '图片20'},
		       		
		       		{'id':'t_chatQQ31', 'type':'pageview', 'page':'/online_qq_article_11', 'title': '在线咨询_文章11'},
		       		{'id':'t_chatQQ32', 'type':'pageview', 'page':'/online_qq_article_12', 'title': '在线咨询_文章12'},
					{'id':'t_chatQQ33', 'type':'pageview', 'page':'/online_qq_article_13', 'title': '在线咨询_文章13'},
					{'id':'t_chatQQ34', 'type':'pageview', 'page':'/online_qq_article_14', 'title': '在线咨询_文章14'},
					{'id':'t_chatQQ35', 'type':'pageview', 'page':'/online_qq_article_15', 'title': '在线咨询_文章15'},
					{'id':'t_chatQQ36', 'type':'pageview', 'page':'/online_qq_article_16', 'title': '在线咨询_文章16'},
					{'id':'t_chatQQ37', 'type':'pageview', 'page':'/online_qq_article_17', 'title': '在线咨询_文章17'},
					{'id':'t_chatQQ38', 'type':'pageview', 'page':'/online_qq_article_18', 'title': '在线咨询_文章18'},
					{'id':'t_chatQQ39', 'type':'pageview', 'page':'/online_qq_article_19', 'title': '在线咨询_文章18'},
					
					{'id':'cartform', 'type':'pageview', 'page':'/shopping_cart', 'title': '购物车'},
					
		           
		],
		
		_init : function() {
			this._loadPublic();
			this._main();
		},

		
		//加载谷歌公共js
		_loadPublic : function() {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			
			this.wechat ? ga('create', 'UA-69399656-3', 'auto') : ga('create', 'UA-69399656-1', 'auto');
			ga('send', 'pageview');
			
		},
		
		
		_main : function() {
			var _self = this;
			$('body').on('click', function(e){
				_self.clickEve(e);
			});
		},
		
		
		//文章统计或者图片统计
		clickEve : function(e) {
			var _self = this;
			for(var i=0; i<_self.obj.length; i++) {
				if(e.target && (e.target.id == _self.obj[i].id)) {
					_self.funcCombination(_self.obj[i]);
				}
			}
		},
		
		//ga函数组合
		funcCombination : function(param) {
			ga('send', param.type, {'page': param.page,'title': param.title});
		}
		
};

