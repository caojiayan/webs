//时间格式：输出2016-10-21(例子)
function shijian(){
var date = new Date();
document.write(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate())
}