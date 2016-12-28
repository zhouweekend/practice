function setCookie(_name, _value, _day){
	var d=new Date();
	d.setDate(d.getDate()+_day);
	document.cookie=_name+"="+encodeURIComponent(_value)+";expires="+d.toGMTString()+";path=/";
}

function getCookie(_name){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0; i<arr.length; i++){
		var col=arr[i].split("=");
		if(col[0]==_name){
			return decodeURIComponent(col[1]);
		}
	}
	return "";
}

$(function(){
	$(".htleft").load("top.html", function(){
		var cookieUname=getCookie("uname");
		//var cookiePaswd=getCookie("paswd");
		if(cookieUname!=""){
			$(".htleft").html("早上好， "+"<span>"+cookieUname +" </span>欢迎来到No5时尚广场&nbsp;&nbsp;&nbsp;&nbsp;<a href='#' onclick='exit()'>[退出]</a>");
		}
		
	});	
})

function exit(){
	setCookie("uname", "", -10);
	//location.href="index.html";
	location.href="index.html";
}
