/** @jest-environment jsdom */
const clearSelect = require('../src/clearSelect');

test('Test Clear Selection', ()=>{
    document.body.innerHTML =
    '<select id="av_resolutions">' +
    '  <option value="8">1080p (5300 Kbps)</option>' +
    '  <option value="7">720p (4300 Kbps)</option>' +
    '  <option value="6">720p (2850 Kbps)</option>' +
    '  <option value="5">576p (1850 Kbps)</option>' +
    '  <option value="4">432p (1200 Kbps)</option>' +
    '  <option value="3">360p (750 Kbps)</option>' +
    '  <option value="2">288p (480 Kbps)</option>' +
    '  <option value="1">180p (300 Kbps)</option>' +
    '  <option value="0">180p (200 Kbps)</option>' +
    '  <option>Auto</option>' +
    '</select>';
    
    select = document.getElementById("av_resolutions");

    clearSelect(select);
     
    expect(select.options.length).toEqual(1);
    expect(select.options[0].value).toEqual("Auto");
})