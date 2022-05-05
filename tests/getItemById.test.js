/** @jest-environment jsdom */
const getItemById = require("../src/getItemById");

const mockFetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{
            id: 1,
            link: "http://example.com/example",
            xValues: '[1,2,3]',
            redY: '[1,2,3]',
            greenY: '[1,2,3]'}]),
    })
);

window.fetch = mockFetch;
window.select = {
    value: 1
};
window.para = {
    innerHTML: ""
};
const mockBuildInfo = jest.fn();
window.buildInfo = mockBuildInfo;

test('getItemById', function(){
    getItemById();

    expect(mockFetch.mock.calls.length).toBe(1);
})