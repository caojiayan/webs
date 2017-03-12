 function mone(thid, che, totalMoney) {
    var mon = document.getElementById("mon");
    var bazhe1 = document.getElementById("bazhe1");
    var bazhe2 = document.getElementById("bazhe2");
    var taoshu = document.getElementById("taoshu");
    var hdmon = document.getElementById("hdmon");
    if (che == 0) {
        mon.innerHTML = 0;
        hdmon.value = 0;
        bazhe1.style.display = "none";
        bazhe2.style.display = "none";
        taoshu.style.display = "none"
    } else if (che == 1) {
        mon.innerHTML = totalMoney;
        hdmon.value = totalMoney;
        bazhe1.style.display = "none";
        bazhe2.style.display = "none";
        taoshu.style.display = "none"
    } else {
        totalMoney = Number(totalMoney);
        mon.innerHTML = totalMoney;
        taoshu.innerHTML = "һ";
        hdmon.value = totalMoney + "-1";
        bazhe1.style.display = "inline";
        bazhe2.style.display = "inline";
        taoshu.style.display = "inline"
    }
}

function allcp(thid) {
    vals = thid.value.split("|");
    var che = 0;
    var totalMoney = 0;
    var prdAttr = 0;
    jncheck = 0;
    for (var i = 0; i < document.getElementsByName("checkb").length; i++) {
        if (document.getElementsByName("checkb")[i].checked == true) {
            prdAttr = document.getElementsByName("checkb")[i].value.split("|");
            totalMoney = Number(totalMoney) + Number(prdAttr[1]);
            che++
        }
    }
    var yxsp = document.getElementById("yxsp");
    var yxsp_li = document.createElement("li");
    var yxsp_a = document.createElement("a");
    yxsp_li.appendChild(yxsp_a);
	
	/*if (thid.parentNode.className=="")
	{
		thid.parentNode.className = "leb_xz";
	}
	else
	{
		thid.parentNode.className = "";
	}*/

    if (thid.checked == true)
    {
        yxsp_a.innerHTML = vals[2];
        yxsp.appendChild(yxsp_li);
        thid.parentNode.className = "leb_xz";
    }
    else
    {
        var as = yxsp.getElementsByTagName("li");
        thid.parentNode.className = "";
        for (var i = 0; i < as.length; i++) {
            var txt = as[i].innerText || as[i].textContent;
            if (txt === vals[2]) {
                as[i].parentNode.removeChild(as[i])
            }
        }
    }
	


    mone(thid, che, totalMoney)
}
