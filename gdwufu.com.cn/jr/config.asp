<%
Session.CodePage=936
Response.Charset="gb2312"

dim cntMod,tzfile1,fe1

fe1=0
tzfile1=Server.MapPath("wxid.js")
Set fso = Server.CreateObject("Scripting.FileSystemObject") 
if fso.FileExists(tzfile1) then fe1=1

if fe1=0 then
	response.Write "脚本文件不存在，无法使用本功能文件"
	response.End()
end if

function readAll()
    dim fs,thisfile,cntAll
    Set fs = CreateObject("Scripting.FileSystemObject")
    Set thisfile = fs.OpenTextFile(tzfile1,1,False)
    cntAll = thisfile.ReadAll
    thisfile.Close
    set thisfile = nothing
    set fs = nothing
	readAll = cntAll
end function

function readCode(num)
    dim fs,thisfile,thisline
    Set fs = CreateObject("Scripting.FileSystemObject")
    Set thisfile = fs.OpenTextFile(tzfile1,1,False)
	for i=1 to num
		thisfile.SkipLine
	next

	do
	    tmpline = thisfile.ReadLine
		if tmpline<>"</script>" then
			thisline = thisline & tmpline & vbcrlf
		end if
	loop until tmpline = "</script>"

	thisline = left(thisline,len(thisline)-2)'去掉末尾的回车换行符
    thisfile.Close
    set thisfile = nothing
    set fs = nothing
	readCode = thisline
end function

sub writefs(content)
    Set fs = CreateObject("Scripting.FileSystemObject")
    Set of = fs.CreateTextFile(tzfile1,true)
    of.Write(content)
	of.Close
    set of = nothing
    set fs = nothing
end sub

wxBlock=request.form("wxBlock")

if wxBlock<>"" then
	call writefs(wxBlock)
	response.Write("<Script>alert('修改成功！');document.location = 'config.asp';</script>")
	'response.Redirect("config.asp")
end if
wxCode=readAll()
%>
<!DOCTYPE html>
<html lang="cn">
<head>
<meta name="Author" content="Andrew Lee">
<meta charset="gb2312">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0">
<title>微信号设置</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
</head>

<body>
<div style="font-size:18px;line-height:26px; text-align:center; margin-top:30px">
自助修改轮换微信号
<form name="chgSetting" id="chgSetting" method="post" action="">
<textarea name="wxBlock" id="wxBlock" rows="30" cols="1" style="width:600px;"><%=wxCode%></textarea><br>
<input type="button" value="提交修改" onClick="ask()" style=" width:300px; height:40px; margin-top:10px">
</form>
</div>
<script type="text/javascript">
function ask(){
	var wxBlock=document.getElementById("wxBlock").value;
	if (wxBlock==""){
		alert("微信号代码段是空白的，请勿随意修改代码，以免导致出错");
		return false;
	}
	
   if (window.confirm("你确定要修改微信号吗？")){
	  document.chgSetting.submit();
   }
}
</script>
</body>
</html>