function onStart(){
    bitrates = player.getBitrateInfoListFor("video");
    
    for (let i = 0; i < bitrates.length; i++){
        var option = document.createElement('option');
        option.text =  bitrates[i].height + "p ("+ bitrates[i].bitrate / 1000 +" Kbps)";
        option.value = i;
        select.add(option, 0);
    }
}