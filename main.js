brslider = document.getElementById("bit_rate");
brword = document.getElementById("br_word");
loadbtn = document.getElementById("load_video");
cur_br = document.getElementById("cur_bitrate");
cur_res = document.getElementById("cur_resolution");
vid_url = document.getElementById("adr_input").value;
force_resbtn = document.getElementById("force_res");
select = document.getElementById("av_resolutions");
address_input = document.getElementById("adr_input");

var player = dashjs.MediaPlayer().create();

function sliderValSet(){
    if (brslider.value == 100){
        brword.innerHTML = "Maximum " + "("+brslider.value+"%)";
    } else if (brslider.value <= 99 && brslider.value >=75){
        brword.innerHTML = "High " + "("+brslider.value+"%)";
    } else if (brslider.value <= 74 && brslider.value >=50){
        brword.innerHTML = "Medium " + "("+brslider.value+"%)";
    } else if (brslider.value <= 49 && brslider.value >=25){
        brword.innerHTML = "Low " + "("+brslider.value+"%)";
    } else if (brslider.value <= 24 && brslider.value >=0){
        brword.innerHTML = "Very Low " + "("+brslider.value+"%)";
    }
}

brslider.addEventListener('change', sliderValSet);



function clear_select () {
    Array.from(select.options).forEach(function(option_element) {
        if (option_element.value != "Auto"){
            select.remove(option_element);
        }
    });
}

function initVideo(){
    clear_select();
    player.initialize(document.querySelector("#videoPlayer"), address_input.value, true);
}


loadbtn.addEventListener('click', initVideo);

var xValues = [];
var greenY = [];
var blueY = [];

var achart = new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: greenY,
        borderColor: "green",
        fill: false,
        label: "Video Bit Rate"
      }, { 
        data: blueY,
        borderColor: "blue",
        fill: false,
        label: "Resolution (Height)"
      }]
    },
    options: {
      legend: {display: true},
      scales:{
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Time (Seconds)'
            },
            ticks: {
                display: false 
            }
        }],
        yAxes: [{
            display: true, 
            scaleLabel: {
                display: true,
                labelString: 'Bit Rate (Kbps)'
            }
        }]
    }
    }
}); 

var statsInterval;
var ispaused;

function start_tracking (){
    if (!statsInterval && !ispaused){
        statsInterval = setInterval(function() {
             
            var currentQualityIndex = player.getQualityFor('video');
        
            
            var currentQualityObject = player.getBitrateInfoListFor('video')[currentQualityIndex];
    
            var bitrate = currentQualityObject.bitrate;
            var resolution = currentQualityObject.width +"*"+ currentQualityObject.height; 
            
            var curBitrate = bitrate / 1000;
            cur_br.innerHTML = ("Current Video Bitrate: " + curBitrate + " kbps");
            cur_res.innerHTML = ("Current Resolution: " + resolution);
            
            
            xValues.push(parseInt(player.time()));
            greenY.push(curBitrate);
            blueY.push(currentQualityObject.height);

            achart.update();
        },1000);
    }
}

var bitrates;

function onStart(){
    bitrates = player.getBitrateInfoListFor("video");
    
    for (let i = 0; i < bitrates.length; i++){
        var option = document.createElement('option');
        option.text =  bitrates[i].height + "p ("+ bitrates[i].bitrate / 1000 +" Kbps)";
        option.value = i;
        select.add(option, 0);
    }
}
player.on("streamInitialized", onStart);

function onPause(){
    ispaused = true;
    clearInterval(statsInterval);
    statsInterval = null;
}

player.on("playbackPaused", onPause);

function onPlay(){
    ispaused = false;
    start_tracking();
}

player.on("playbackPlaying", onPlay);

function QualitySelect(){
    let settingsp = player.getSettings();

    if (select.value == "Auto"){
        settingsp.streaming.abr.autoSwitchBitrate = true;
        player.setQualityFor('video', bitrates.length-1);
    } else {
        settingsp.streaming.abr.autoSwitchBitrate = false;
        player.setQualityFor('video', select.value);
    }
}

force_resbtn.addEventListener('click', QualitySelect);