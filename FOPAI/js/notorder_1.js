//code by goingta 20141208
var myDate = new Date();
myDate.getYear();       //��ȡ��ǰ���(2λ)
myDate.getFullYear();   //��ȡ���������(4λ,1970-????)
myDate.getMonth();      //��ȡ��ǰ�·�(0-11,0����1��)
myDate.getDate();       //��ȡ��ǰ��(1-31)
myDate.getDay();        //��ȡ��ǰ����X(0-6,0����������)
myDate.getTime();       //��ȡ��ǰʱ��(��1970.1.1��ʼ�ĺ�����)
myDate.getHours();      //��ȡ��ǰСʱ��(0-23)
myDate.getMinutes();    //��ȡ��ǰ������(0-59)
myDate.getSeconds();    //��ȡ��ǰ����(0-59)
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




