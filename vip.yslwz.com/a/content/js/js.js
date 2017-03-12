// JavaScript Document
$(document).ready(function()
{
  $(".plAll").click(function(){$(".plList").fadeToggle('slow');});
  var n=0;
  var h=new Date().getHours();
  if(h<12)n=1
  var sj=GetTime(n);
  $("#sj1").html(sj+' 08:33');
  $("#sj2").html(sj+' 08:12');
})

function GetTime(n){
  var date = new Date();
  var seperator = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if(n>0)strDate = strDate-n;
  if (month >= 1 && month <= 9) {month = "0" + month;}
  if (strDate >= 0 && strDate <= 9) {strDate = "0" + strDate;}
  var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
  return currentdate;
}