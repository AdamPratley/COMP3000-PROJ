
const sliderValSet = require('../src/sliderValSet');

test('Change Slider Word',()=>{
    var brword = {innerHTML:"Test"}

    sliderValSet(brword,55);
    
    expect(brword.innerHTML).toEqual('Medium (55%)');
});