/** @jest-environment jsdom */
const addOption = require("../src/addOption");

const item = {
    id: 1
}
const mockSelect = {
    add: jest.fn() 
}
window.select = mockSelect

test('addOption', function(){
    addOption(item);

    expect(mockSelect.add.mock.calls.length).toBe(1);
})