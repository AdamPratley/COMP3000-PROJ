function startTracking (){
    if (!statsInterval){
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
            redY.push(brslider.value * 100);

            dataChart.update();
        },1000);
    }
}