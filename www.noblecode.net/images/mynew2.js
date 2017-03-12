
/*
* ???????????汾???:
*
*/

var ClientType = ""; //??????????
var LastShow = "";
var tips = "";
var browser = {
    versions: function () {
        var u = navigator.userAgent,
                    app = navigator.appVersion;
        return { //????????????汾??? 
            trident: u.indexOf('Trident') > -1,
            //IE???
            presto: u.indexOf('Presto') > -1,
            //opera???
            webKit: u.indexOf('AppleWebKit') > -1,
            //???????????
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //??????
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            //??????????
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //ios???
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            //android??????uc?????
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            //????iPhone????QQHD?????
            iPad: u.indexOf('iPad') > -1,
            //???iPad
            webApp: u.indexOf('Safari') == -1 //???web??ó?????????????
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
var Qudao = "";//?????????
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

function check() {
    if (window.navigator.cookieenabled)
        return true;
    else {
        alert("????????????cookie???????");
        return false;
    }
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return (arr[2]);
    else
        return null;
}

//???cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
//??????
//setCookie('username','Darren',30) 



$(document).on("pageinit", "#web", function () {
    $("b").on("taphold", function () {
        var this_ip = returnCitySN["cip"];
        var this_url = window.location.href
        var this_wx = stxlwx;
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
    var lastUrl = ''; //???url-----------------------
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