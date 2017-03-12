$(function(){
		// 答案数据
		var json = [
			"20岁-29岁2个月以下试过生发，但没成功",
			"20岁-29岁2个月以下一直想生发，但没有行动",
			"20岁-29岁2个月以下成功了，还想继续预防脱发",
			"20岁-29岁3个月试过生发，但体重反弹",
			"20岁-29岁3个月一直想生发，但没有行动",
			"20岁-29岁3个月成功了，还想继续预防脱发",
			"20岁-29岁6个月以上试过生发，但体重反弹",
			"20岁-29岁6个月以上一直想生发，但没有行动",
			"20岁-29岁6个月以上成功了，还想继续预防脱发",
			"30岁-40岁2个月以下试过生发，但体重反弹",
			"30岁-40岁2个月以下一直想生发，但没有行动",
			"30岁-40岁2个月以下成功了，还想继续预防脱发",
			"30岁-40岁3个月试过生发，但体重反弹",
			"30岁-40岁3个月一直想生发，但没有行动",
			"30岁-40岁3个月成功了，还想继续预防脱发",
			"30岁-40岁6个月以上试过生发，但体重反弹",
			"30岁-40岁6个月以上一直想生发，但没有行动",
			"30岁-40岁6个月以上成功了，还想继续预防脱发",
			"40岁以上2个月以下试过生发，但体重反弹",
			"40岁以上2个月以下一直想生发，但没有行动",
			"40岁以上2个月以下成功了，还想继续预防脱发",
			"40岁以上3个月试过生发，但体重反弹",
			"40岁以上3个月一直想生发，但没有行动",
			"40岁以上3个月成功了，还想继续预防脱发",
			"40岁以上6个月以上试过生发，但体重反弹",
			"40岁以上6个月以上一直想生发，但没有行动",
			"40岁以上6个月以上成功了，还想继续预防脱发"
		];
		// 第一题
		var question_1='',question_2='',question_3='',Last_question='';
		$("#first li").on("click",function(){
			$(this).addClass("on").siblings().removeClass("on");
			question_1 = $(this).html();
			mySwiper.slideNext();
		});

		// 第二题
		$("#second li").on("click",function(){
			$(this).addClass("on").siblings().removeClass("on");
			question_2 = $(this).html();
			mySwiper.slideNext();
		});

		// 第三题
		$("#third li").on("click",function(){
			$(this).addClass("on").siblings().removeClass("on");
			question_3 = $(this).html();
			question_3 = question_3.replace(/[A-Z]+\./g,"");

		});

		// 点击提交弹出对应编号
		$("#submit_btn").on("click",function(){
			if(question_3==""){
				alert("请告诉我们您以前试过防脱发吗！");
				return;
			}
			Last_question = question_1+question_2+question_3;
			Last_question = $.trim(Last_question);
			Last_questionIndex = $.inArray(Last_question,json) + 1;
			$("#Mask .Mask_txt h3 span,#Mask .Mask_txt .num").html(Last_questionIndex);
			$("#Mask").fadeIn(400);
		});

		// 点击关闭按钮关闭遮罩层并且将测试返回第一题
		$("#Mask .close_Mask").on("click",function(){
			$("#Mask").fadeOut(400);
			mySwiper.slideTo(0);
		});

		// 点击上一题
		$(".prev").on("click",function(){
			mySwiper.slidePrev();
		});
	});