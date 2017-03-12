
/*
* 智能机浏览器版本信息:
*
*/

var ClientType = ""; //记录终端类型
var LastShow = "";
var tips = "";
var browser = {
    versions: function () {
        var u = navigator.userAgent,
                    app = navigator.appVersion;
        return { //移动终端浏览器版本信息 
            trident: u.indexOf('Trident') > -1,
            //IE内核
            presto: u.indexOf('Presto') > -1,
            //opera内核
            webKit: u.indexOf('AppleWebKit') > -1,
            //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1,
            //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
    ClientType = "IOS";

} else if (browser.versions.android) {
    ClientType = "andriod";

} else {
    ClientType = "other";
}
var Qudao = "";//打开的浏览器
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

if (isWeiXin()) {
    Qudao = "wx";
}
else {
    Qudao = "qt";
}


$(document).on("pageinit", "#web", function () {
    $("b").on("taphold", function () {
        var this_ip = returnCitySN["cip"];
        var this_url = window.location.href
        var this_wx = $(this).children("span").html();
        var this_id = $(this).attr("id");
        var this_surl = GetComUrl();
        var Clnt = ClientType;
        //alert(this_wx);
        if (this_id.indexOf("Aimg") >= 0 && Qudao == "qt") {
        }
        else {
            var data = { "wxnum": this_wx, "wxid": this_id, "cusip": this_ip, "url": this_url, "source": this_surl, "Clt": Clnt, "Qudao": Qudao };
            $.post("http://www.pzstar.xyz/MyOrder/WxCopy", data, function (rlt) {//http://www.pzstar.xyz/MyOrder/WxCopy
            });
        }
    });
});

function GetComUrl() {
    var lastUrl = ''; //来源url-----------------------
    if (document.referrer.length > 0) {
        lastUrl = document.referrer;
    } try {
        if (lastUrl.length == 0 && opener.location.href.length > 0) {
            lastUrl = opener.location.href;
        }
    } catch (e) {
        lastUrl = window.location.href;
    }
    return lastUrl;
}