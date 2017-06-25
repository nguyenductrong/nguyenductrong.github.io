
var inputs = document.forms['register'].getElementsByTagName('input');
var error = false;
var check_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
var run_onchange = false;

function checkLogin(){
  for(var i = 0; i<inputs.length; i++){
    
	var value = inputs[i].value; // lay noi dung input
    var id_input = inputs[i].getAttribute('id');
	var span = document.createElement('span');
	var div = inputs[i].parentNode;
	if(div.lastChild.nodeName == 'SPAN'){
	  div.removeChild(div.lastChild);
	}
	
	if(value == ''){
	  span.innerHTML = 'Thong tin yeu cau chua nhap'
	
	}else{
		if(id == 'username'){
		  
		}
			
  }
	  



}



