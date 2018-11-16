//function load(){
//	var xmlhttp;
// 	var code = document.getElementById("code");
//	var msg = document.getElementById("msg");
//	var sex = document.getElementById("sex");
//	var phone = document.getElementById("phone");
//	var address = document.getElementById("address");
//	var under  =document.getElementById("under")
//	var usernames = document.getElementById("username_text").innerHTML;
//	var passwords = document.getElementById("password_text").innerHTML;
//	var yanzhengmas = document.getElementById("yanzhengma_input1").innerHTML;
//		xmlhttp=new XMLHttpRequest();
// 		under.style.display="none";
// 		alert(usernames);
//	xmlhttp.onreadystatechange=function()
//	{
//		if (xmlhttp.readyState==4 && xmlhttp.status==200)
//		{
//			document.getElementById('code').innerHTML=xmlhttp.responseText;
// 			document.getElementById('msg').innerHTML=xmlhttp.responseText;
//  		document.getElementById('sex').innerHTML=xmlhttp.responseText;
//		}
//	}
//	xmlhttp.open("POST","http://tech.sky31.top/login.php",true);
//	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//
//	xmlhttp.send("username=usernames&password=passwords&code=yanzhengmas");
//}
