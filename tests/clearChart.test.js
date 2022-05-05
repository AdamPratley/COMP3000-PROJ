/** @jest-environment jsdom */
const clearChart = require('../src/clearChart');

const mockClass = {
    destroy: jest.fn()
}

const dataChart = mockClass;

describe('Test clearChart', function(){
    test('dataChart != null', function(){
        clearChart(dataChart)
        expect(mockClass.destroy.mock.calls.length).toBe(1);
    });
    
    test('dataChart == null', function(){
        clearChart(null)
        expect(mockClass.destroy.mock.calls.length).toBe(1);
    });
})

