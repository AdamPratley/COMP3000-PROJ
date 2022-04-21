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

function sendput(id){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://192.168.1.136:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/table/0/flow/iperf");

    xhr.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
    xhr.setRequestHeader("Content-Type", "application/xml");

    var data = `<flow xmlns="urn:opendaylight:flow:inventory">
    <id>iperf</id>
    <instructions>
    <instruction>
    <order>0</order>
    <apply-actions>
    <action>
    <order>1</order>
    <output-action>
        <output-node-connector>NORMAL</output-node-connector>
        <max-length>65535</max-length>
    </output-action>
    </action>
    <action>
    <order>0</order>
    <set-queue-action>
        <queue-id>${id}</queue-id>
    </set-queue-action>
    </action>
    </apply-actions>
    </instruction>
    </instructions>
    <barrier>true</barrier>
    <flow-name>iperf</flow-name>
    <match>
    <ethernet-match>
                <ethernet-type>
                    <type>2048</type>
                </ethernet-type>
            </ethernet-match>
            <ipv4-source>10.0.0.2/32</ipv4-source>
            <ipv4-destination>10.0.0.1/32</ipv4-destination>
            <ip-match>
                <ip-protocol>6</ip-protocol>         
            </ip-match>
            <tcp-destination-port>12345</tcp-destination-port>
    </match>
    <hard-timeout>0</hard-timeout>
    <priority>32768</priority>
    <table_id>0</table_id>
    <idle-timeout>0</idle-timeout>
    </flow>`;

    xhr.send(data);
}

function sliderValSet(val){
    if (val == 100){
        brword.innerHTML = "Maximum " + "("+val+"%)";
    } else if (val <= 99 && val >=75){
        brword.innerHTML = "High " + "("+val+"%)";
    } else if (val <= 74 && val >=50){
        brword.innerHTML = "Medium " + "("+val+"%)";
    } else if (val <= 49 && val >=25){
        brword.innerHTML = "Low " + "("+val+"%)";
    } else if (val <= 24 && val >=0){
        brword.innerHTML = "Very Low " + "("+val+"%)";
    }
}

brslider.addEventListener('change', () => {
    sliderValSet(brslider.value);
    sendput(brslider.value);
});



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