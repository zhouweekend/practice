var ajax={
	get:function(url,fn,fn1){
		//1创建对象
		var xhr;
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject("Msxml2.XMLHTTP");
		}
		//2请求连接
		xhr.open("get",url,true);
		//3发送请求
		xhr.send();
		//4回调
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					fn(xhr.responseText);
					//var arr=eval(xhr.responseText);
					//console.log(arr);
				}else{
					if(fn1){
						fn1(xhr.status);
					}
				}
			}
		}
	},
	post:function(url,arg,fn,fn1){
		//1创建对象
		var xhr;
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject("Msxml2.XMLHTTP");
		}
		//2请求连接
		xhr.open("post",url,true);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		//3发送请求
		xhr.send(arg);
		//4回调
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					fn(xhr.responseText);
					//var arr=eval(xhr.responseText);
					//console.log(arr);
				}else{
					if(fn1){
						fn1(xhr.status);
					}
				}
			}
		}
	}
}