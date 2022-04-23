/** @jest-environment jsdom */
const initVideo = require('../src/initVideo');

document.body.innerHTML =
    '<div class="media">'+
    '  <video id="videoPlayer" controls muted onloadstart="this.volume=0.2"></video>'+
    '</div>';
    
videoplayer = document.querySelector("#videoPlayer");

var player = {
    a: null,
    b: null,
    c: null,
    initialize: function(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

var vid_url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";

test('initialise Video Test', function(){

    initVideo(player,videoplayer,vid_url);

    expect(player.a).toEqual(videoplayer);
    expect(player.b).toEqual(vid_url);
    expect(player.c).toEqual(true);
    
});