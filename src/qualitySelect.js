function qualitySelect(player,settingsp,select,bitrates){
    if (select.value == "Auto"){
        settingsp.streaming.abr.autoSwitchBitrate = true;
        player.setQualityFor('video', bitrates.length-1);
    } else {
        settingsp.streaming.abr.autoSwitchBitrate = false;
        player.setQualityFor('video', select.value);
    }
}

module.exports = qualitySelect;