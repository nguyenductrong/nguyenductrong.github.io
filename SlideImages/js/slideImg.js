    var img_count = 1;
    var total = 5;

function slide(x){
	var Image = document.getElementById('img');
	img_count = img_count + x;
	if(img_count > total){
		img_count = 1;
	}
	if(img_count < 1){
	    img_count = total;
	}
	Image.src = "images/img" + img_count + ".jpg";
    	
}

window.setInterval(function slideImg(){
	var Image = document.getElementById('img');
	img_count = img_count + 1;
	if(img_count > total){
		img_count = 1;
	}
	if(img_count < 1){
	    img_count = total;
	}
	Image.src = "images/img" + img_count + ".jpg";
    	
},3000);