
/*
* ���ܻ�������汾��Ϣ:
*
*/

var ClientType = ""; //��¼�ն�����
var LastShow = "";
var tips = "";
var browser = {
    versions: function () {
        var u = navigator.userAgent,
                    app = navigator.appVersion;
        return { //�ƶ��ն�������汾��Ϣ 
            trident: u.indexOf('Trident') > -1,
            //IE�ں�
            presto: u.indexOf('Presto') > -1,
            //opera�ں�
            webKit: u.indexOf('AppleWebKit') > -1,
            //ƻ�����ȸ��ں�
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            //����ں�
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            //�Ƿ�Ϊ�ƶ��ն�
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            //ios�ն�
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            //android�ն˻���uc�����
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            //�Ƿ�ΪiPhone����QQHD�����
            iPad: u.indexOf('iPad') > -1,
            //�Ƿ�iPad
            webApp: u.indexOf('Safari') == -1 //�Ƿ�webӦ�ó���û��ͷ����ײ�
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
var Qudao = "";//�򿪵������
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
    var lastUrl = ''; //��Դurl-----------------------
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