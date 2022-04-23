function initVideo(){
    clearSelect();
    player.initialize(document.querySelector("#videoPlayer"), vid_url, true);
}