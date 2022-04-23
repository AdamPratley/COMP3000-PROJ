//HTML Elements
brslider = document.getElementById("bit_rate");
brword = document.getElementById("br_word");
loadbtn = document.getElementById("load_video");
cur_br = document.getElementById("cur_bitrate");
cur_res = document.getElementById("cur_resolution");
vid_url = document.getElementById("adr_input").value;
odlAddr = document.getElementById("odl_input").value;
forceQuality = document.getElementById("force_res");
select = document.getElementById("av_resolutions");
//address_input = document.getElementById("adr_input");

//Variables

var bitrates, statsInterval;
var player = dashjs.MediaPlayer().create();

var xValues = [];
var greenY = [];
var blueY = [];
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
        data: blueY,
        borderColor: "blue",
        fill: false,
        label: "Resolution (Height in Pixels)"
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
    sliderValSet(brslider.value);
    sendPut(brslider.value);
});

loadbtn.addEventListener('click', initVideo);

player.on("streamInitialized", onStart);
player.on("playbackPaused", onPause);
player.on("playbackPlaying", onPlay);

forceQuality.addEventListener('click', qualitySelect);