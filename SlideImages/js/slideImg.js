var images_count = 1;

/*
  
  param images_count = 1: first position;
*/
slider(images_count);

/*
 run auto silerImages
*/
window.setInterval(function(){
	slider(images_count += 1);
}, 4000);

/*
  function next and previous.
*/
function plucSlides(n) {
	slider(images_count += 1);
}

/*
 Function run below slider images
 @param positionItem: position images
*/
function currentSlide(positionItem) {
  slider( images_count = positionItem);
  console.log("gia tri: " + positionItem);
}

/*
  Function to run sliderImage
  @param x 
*/
function slider(x) {
	var i;
	var imageSlider = document.getElementsByClassName('frame_images');
    var imagesFooter = document.getElementsByClassName('imagesFooter');
	var numberImages = imageSlider.length;
	if(images_count > numberImages) { 
		console.log("gia tri x: " + x);
		images_count = 1;
	}
	if(images_count < 1) {
	    images_count = numberImages;
		console.log("gia tri x: " + x);
	}
	for (i = 0; i < numberImages; i ++) {
		imageSlider[i].style.display = "none";
		imagesFooter[i].classList.remove("active");		
	}
	imageSlider[images_count-1].style.display = "block";
	imagesFooter[images_count-1].classList.add("active");
	
}




