/** @jest-environment jsdom */
const clearChart = require('../src/clearChart');

class mockClass{
    destroy = function(){};
}
const dataChart = new mockClass;

test('Test clearChart', function(){
    expect(clearChart(dataChart));
});