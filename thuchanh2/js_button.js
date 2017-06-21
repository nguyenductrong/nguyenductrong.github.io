
  var bt_dropdown = document.getElementsByClassName("dropdown");
  var i;

  for (i = 0; i <  bt_dropdown.length; i++) {
    bt_dropdown[i].onclick = function() {
    this.classList.toggle("active");
    var item_top = this.nextElementSibling;
    if (item_top.style.maxHeight){
      item_top.style.maxHeight = null;
    } else {
      item_top.style.maxHeight = item_top.scrollHeight + "px";
    } 
  };
}



