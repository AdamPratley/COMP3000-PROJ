/** @jest-environment jsdom */
const buildInfo = require("../src/buildInfo");

const mockJSON = {
    parse: jest.fn()
}

const mockInitChart = jest.fn();

var data = {
    xValues: [1,2,3],
    redY: [1,2,3],
    greenY: [1,2,3]
}

window.JSON = mockJSON;
window.initChart = mockInitChart;

test('buildInfo', function(){
    buildInfo(data);

    expect(mockJSON.parse.mock.calls.length).toBe(3);
    expect(mockInitChart.mock.calls.length).toBe(1);
})