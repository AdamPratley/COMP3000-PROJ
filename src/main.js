//HTML Elements
brslider = document.getElementById("bit_rate");
brWord = document.getElementById("br_word");
loadbtn = document.getElementById("load_video");
cur_br = document.getElementById("cur_bitrate");
cur_res = document.getElementById("cur_resolution");
adrInput = document.getElementById("adr_input");
odlInput = document.getElementById("odl_input");
forceQuality = document.getElementById("force_res");
select = document.getElementById("av_resolutions");
videoplayer = document.querySelector("#videoPlayer");

var config = {};
getConfig();

var vid_url = adrInput.value;
var odlAddr = odlInput.value;

adrInput.addEventListener('change', () => {
  vid_url = adrInput.value;
})
odlInput.addEventListener('change', () => {
  odlAddr = odlInput.value;
})
//Variables
var bitrates, statsInterval;
var player = dashjs.MediaPlayer().create();
let settingsp = player.getSettings();

var xValues = [];
var greenY = [];
var redY = [];

var dataChart = new Chart("dataChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: greenY,
        borderColor: "green",
        fill: false,
        label: "Video Bit Rate (Kbps)"
      }, { 
        data: redY,
        borderColor: "red",
        fill: false,
        label: "Connection Bit Rate (Kbps)"
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

//Event Listeners
brslider.addEventListener('change', () => {
    sliderValSet(brWord,brslider.value);
    sendPut(brslider.value,odlAddr);
});

loadbtn.addEventListener('click', function (){
  clearSelect(select);
  initVideo(player,videoplayer,vid_url);
});

player.on("streamInitialized", function(){
  onStart(bitrates,player,select);
});

player.on("playbackPaused", function(){
    clearInterval(statsInterval);
    statsInterval = null;
});

player.on("playbackPlaying", function(){
  if (!statsInterval){
    statsInterval = setInterval(function() {
      tracking(player,cur_br,cur_res,brslider,xValues,greenY,redY,dataChart);
    },1000);
  }
});

forceQuality.addEventListener('click', function(){
  qualitySelect(player,settingsp,select,bitrates);
});