/** @jest-environment jsdom */
const getItemIds = require("../src/getItemIds");

const mockFetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({id: 1})
    })
);

const mockBuildOptions = jest.fn();
window.buildOptions = mockBuildOptions;
window.fetch = mockFetch;


test('getItemIds', function(){
    getItemIds();

    expect(mockFetch.mock.calls.length).toBe(1);
});