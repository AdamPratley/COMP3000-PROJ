/** @jest-environment jsdom */
const buildOptions = require("../src/buildOptions");

var data = [0,1,2];
var mockSelect = {
    innerHTML: "test"
};
const mockAddOptions = jest.fn();
window.select = mockSelect;
window.addOption = mockAddOptions;


test('buildOptions', function(){
    buildOptions(data);
    expect(mockAddOptions.mock.calls.length).toBe(3);
})