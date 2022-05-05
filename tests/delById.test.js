/** @jest-environment jsdom */
const delById = require("../src/delById");


const mockFetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({success: true})}));

window.fetch = mockFetch;
window.select = {
    value: 1
}
window.getItemIds = jest.fn()
test('delById', function(){
    delById();

    expect(mockFetch.mock.calls.length).toBe(1);
})