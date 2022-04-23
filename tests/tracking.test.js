/** @jest-environment jsdom */
const tracking = require('../src/tracking');
document.body.innerHTML =
    '<input type="range" min="1" max="100" value="100" class="slider" id="bit_rate"></input>'+
    '<label id="cur_bitrate">Reported Bitrate: n/a</label>'+
    '<label id="cur_resolution">Current Resolution: n/a</label>';

brslider = document.getElementById("bit_rate");
cur_br = document.getElementById("cur_bitrate");
cur_res = document.getElementById("cur_resolution");

brslider.value = 50;

let xValues = [];
let greenY = [];
let blueY = [];
let redY = [];

var dataChart = {
    update: function(){}
}

var player = {
    time: function(){
        return 1;
    },
    getQualityFor: function(a){
        return 0;
    },
    getBitrateInfoListFor: function(a){
        return [{
            "mediaType": "video",
            "bitrate": 200000,
            "width": 320,
            "height": 180,
            "scanType": "progressive",
            "qualityIndex": 0
        }]
    }
}
test('test Tracking', function(){

    tracking(player,cur_br,cur_res,brslider,xValues,greenY,blueY,redY,dataChart);
    

    expect(xValues[0]).toEqual(1);
    expect(greenY[0]).toEqual(200);
    expect(blueY[0]).toEqual(180);
    expect(redY[0]).toEqual(5000);

    expect(cur_br.innerHTML).toEqual("Current Video Bitrate: 200 kbps");
    expect(cur_res.innerHTML).toEqual("Current Resolution: 320*180");
});