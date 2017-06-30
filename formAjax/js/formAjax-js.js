
function submitClick() {
	var username = document.getElementById("username");
	var passwork = document.getElementById("password");
	var email = document.getElementById("email");
	var errUserName = document.getElementById("errUserName");
	var errPasswork = document.getElementById("errPassword");
	var errEmail = document.getElementById("errEmail");

	errUserName.innerHTML = "";
	errPasswork.innerHTML = "";
	errEmail.innerHTML = "";

	var checkUserName = false;
	var checkPassWord = false;
	var checkMail = false;

	if (isNull(username.value) && isNull(passwork.value) && isNull(email.value)) {
		errUserName.innerHTML = "Chưa nhập thông tin";
		errPasswork.innerHTML = "Chưa nhập thông tin";
		errEmail.innerHTML = "Chưa nhập thông tin";

	} else {

		// check username

		if (isNull(username.value)) {
			errUserName.innerHTML = "Have not enter username !"
		} else if (!checkValidateText(username.value)) {
			errUserName.innerHTML = "Username wrong format !"
		} else if (!checkLength(username.value)) {
			errUserName.innerHTML = "Username length min 8 letter !";
		} else {
			checkUserName = true;
		}

		// check passwork

		if (isNull(passwork.value)) {
			errPasswork.innerHTML = "Have not enter password !";
		} else if (!checkValidateText(passwork.value)) {
			errPasswork.innerHTML = "Password is not format !";
		} else if (!checkLength(passwork.value)) {
			errPasswork.innerHTML = "Password length min 8 letter !";
		} else {
			checkPassWord = true;
		}

		// check email
		if (isNull(email.value)) {
			errEmail.innerHTML = "Have not enter email !";
		} else if (!checkValidateEmail(email.value)) {
			errEmail.innerHTML = "Email wrong format !";
		} else {
			checkMail = true;
		}
	}

	if (checkUserName && checkPassWord && checkMail) {
		
		var url = "login";
		callAjax(url,(username.value).trim());
		
	}

}

function callAjax(url,username){
	httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
		alert("Khong the khoi tao XMLHttpRequest");
		return false;
	}
	httpRequest.onreadystatechange = processRequest;

	
	httpRequest.open("GET", url + "?username=" + username, true);
	httpRequest.send();
	
	
}

function processRequest(){
	if (httpRequest.readyState == 4){
		if(httpRequest.status == 200){
			
			var return_data = httpRequest.responseText;
			console.log(return_data);
			document.getElementById("status_js").innerHTML = return_data;
		}
		
		
	}
		
}

// New a XMLHttpRequest
function ajaxFunction() {
	var HttpXML = false;
	try {

		// Voi cac trinh duyet dien dai: Opera 8.0+, Firefox, Safari ajaxRequest
		// = new
		HttpXML = XMLHttpRequest();
	} catch (e) {
		try {
			HttpXML = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				HttpXML = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				alert(' Browser is broken !');
			}
		}
	}
	return HttpXML;
}


function isNull(text) {
	if ((text == "") || (text == null)) {
		return true;
	}
	return false;

}

function checkLength(text) {
	if (text.length < 8) {
		return false;
	}
	return true;
}
function checkValidateText(text) {
	var validate = /^([a-zA-Z0-9.]+@){0,1}([a-zA-Z0-9.])+$/;
	return validate.test(text);

}

function checkValidateEmail(text) {
	var validate = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return validate.test(text);

}

function refreshClick() {
	window.location.reload();
}

function getDate() {
	
	

}
