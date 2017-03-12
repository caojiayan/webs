//code by goingta 20141208
var myDate = new Date();
myDate.getYear();       //获取当前年份(2位)
myDate.getFullYear();   //获取完整的年份(4位,1970-????)
myDate.getMonth();      //获取当前月份(0-11,0代表1月)
myDate.getDate();       //获取当前日(1-31)
myDate.getDay();        //获取当前星期X(0-6,0代表星期天)
myDate.getTime();       //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();      //获取当前小时数(0-23)
myDate.getMinutes();    //获取当前分钟数(0-59)
myDate.getSeconds();    //获取当前秒数(0-59)
var truedate = myDate.getMonth()+1;
var not3num=""; 
for(var i=0;i<3;i++) 
{ 
not3num+=Math.floor(Math.random()*10); 
}
document.write("<input type=hidden name=notorderid id=notorderid value='no."+myDate.getFullYear()+truedate+myDate.getDate()+myDate.getHours()+myDate.getMinutes()+myDate.getSeconds()+not3num+"'>");

document.writeln("<input type=\"hidden\" value=\"\" name=\"notnowurl\" id=\"notnowurl\">");
document.writeln("<input type=\"hidden\" value=\"\" name=\"notfromurl\" id=\"notfromurl\">");

document.getElementById("notnowurl").value = top.location.href;
document.getElementById("notfromurl").value = opener?opener.location.href:(top.document.referrer?top.document.referrer:top.location.href);




