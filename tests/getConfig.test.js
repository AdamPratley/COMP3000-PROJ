/** @jest-environment jsdom */
const getConfig = require("../src/getConfig");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
        "min": 0,
        "max": 1000,
        "step": 50
    }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test('getConfig Test', function(){
    expect(getConfig());
});