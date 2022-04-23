const qualitySelect = require('../src/qualitySelect');

var player = {
    video: null,
    setQualityFor: function (a,b){
        this.video = b
    }
};

var settingsp = {
    streaming: {
        abr: {
            autoSwitchBitrate: null
        }
    }
}

var bitrates = {
    length: 5
};

var select = {
    value: null
};

test('Select Quality "Auto"',()=>{
    select.value = "Auto";

    qualitySelect(player,settingsp,select,bitrates);

    expect(settingsp.streaming.abr.autoSwitchBitrate).toEqual(true);
    expect(player.video).toEqual(4);
});

test('Select Quality "720p"',()=>{
    select.value = "720p";

    qualitySelect(player,settingsp,select,bitrates);

    expect(settingsp.streaming.abr.autoSwitchBitrate).toEqual(false);
    expect(player.video).toEqual("720p");
});