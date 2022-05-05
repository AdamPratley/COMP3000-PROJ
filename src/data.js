var data = null;
var loadBtn = document.getElementById("loadBtn"); 
var delBtn = document.getElementById("delBtn");
var para = document.getElementById("text");
var select = document.getElementById("sessionSelect");
var dataChart = null;


getItemIds()


loadBtn.addEventListener('click', function(){
    if (dataChart != null){
        dataChart.destroy();
    }
    getItemById();
})

delBtn.addEventListener('click', function(){
    delById();
})