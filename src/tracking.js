function tracking(config,player,cur_br,cur_res,brslider,xValues,greenY,redY,dataChart){
        var currentQualityIndex = player.getQualityFor('video');
        
        var currentQualityObject = player.getBitrateInfoListFor('video')[currentQualityIndex];

        var bitrate = currentQualityObject.bitrate;

        var resolution = currentQualityObject.width +"*"+ currentQualityObject.height; 
        
        var curBitrate = bitrate / 1000;
        cur_br.innerHTML = ("Current Video Bitrate: " + curBitrate + " kbps");
        cur_res.innerHTML = ("Current Resolution: " + resolution);

        xValues.push(parseInt(player.time()));
        greenY.push(curBitrate);
        redY.push(config.min +((brslider.value - 1) * config.step));

        dataChart.update();
}

module.exports = tracking;