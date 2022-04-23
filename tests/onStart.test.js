/** @jest-environment jsdom */
const onStart = require('../src/onStart');

document.body.innerHTML =
    '<select id="av_resolutions">'+
    '  <option>Auto</option>'+
    '</select>';
          
select = document.getElementById("av_resolutions"); 

var bitrates;
var player = {
    getBitrateInfoListFor: function(a){
        return [{
            "mediaType": "video",
            "bitrate": 200000,
            "width": 320,
            "height": 180,
            "scanType": "progressive",
            "qualityIndex": 0
        },{
            "mediaType": "video",
            "bitrate": 480000,
            "width": 512,
            "height": 288,
            "scanType": "progressive",
            "qualityIndex": 2
        },{
            "mediaType": "video",
            "bitrate": 750000,
            "width": 640,
            "height": 360,
            "scanType": "progressive",
            "qualityIndex": 3
        }]
    }
}
test('Test onStart',function(){
    onStart(bitrates,player,select);

    expect(select.options.length).toEqual(4);
});