let items = document.querySelectorAll(".item");

items.forEach(function(item){

item.addEventListener("mouseover", function(){
this.style.backgroundColor = "yellow";
});

item.addEventListener("mouseout", function(){
this.style.backgroundColor = "lightgray";
});

});