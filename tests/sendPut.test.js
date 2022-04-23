/** @jest-environment jsdom */
const sendPut = require("../src/sendPut");

const xhrMock = () => ({
    open            : jest.fn(),
    send            : jest.fn(),
    setRequestHeader: jest.fn()
  })
  
window.XMLHttpRequest = jest.fn().mockImplementation(xhrMock)

test('sendPut Test', function(){
    var odladdr = "localhost";
    var id = "1";

    expect(sendPut(id,odladdr));
});