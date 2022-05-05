var data = null;
var loadBtn = document.getElementById("loadBtn"); 
var para = document.getElementById("text");
var select = document.getElementById("sessionSelect");
var dataChart = null;


getItemIds()


loadBtn.addEventListener('click', function(){
    getItemById();
})