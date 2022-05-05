const sliderValSet = require('../src/sliderValSet');

describe('Slider Value', function(){
    test('100',()=>{
        var brword = {innerHTML:"Test"}
    
        sliderValSet(brword,100);
        
        expect(brword.innerHTML).toEqual('Maximum (100%)');
    });
    
    test('85',()=>{
        var brword = {innerHTML:"Test"}
    
        sliderValSet(brword,85);
        
        expect(brword.innerHTML).toEqual('High (85%)');
    });
    
    test('55',()=>{
        var brword = {innerHTML:"Test"}
    
        sliderValSet(brword,55);
        
        expect(brword.innerHTML).toEqual('Medium (55%)');
    });
    
    test('30',()=>{
        var brword = {innerHTML:"Test"}
    
        sliderValSet(brword,30);
        
        expect(brword.innerHTML).toEqual('Low (30%)');
    });
    
    test('10',()=>{
        var brword = {innerHTML:"Test"}
    
        sliderValSet(brword,10);
        
        expect(brword.innerHTML).toEqual('Very Low (10%)');
    });
    
    test('Out of Range',()=>{
        var brword = {innerHTML:"Test"}
    
        sliderValSet(brword,200);
        
        expect(brword.innerHTML).toEqual('Error');
    });
})

