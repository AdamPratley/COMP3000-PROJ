/** @jest-environment jsdom */
const initChart = require('../src/initChart');

var xValues = [];
var redY = [];
var greenY = [];
var arg1 = null;
var arg2 = null;


window.Chart = class Chart{
    constructor(a,b){
        arg1 = a;
        arg2 = b;
    } 
};

test("Test initChart", function(){
    initChart(xValues,redY,greenY);

    expect(arg1).toEqual("dataChart");
    expect(arg2).toEqual({
        type: "line",
        data: {
          labels: xValues,
          datasets: [{ 
            data: greenY,
            borderColor: "green",
            fill: false,
            label: "Video Bit Rate (Kbps)"
          }, { 
            data: redY,
            borderColor: "red",
            fill: false,
            label: "Connection Bit Rate (Kbps)"
          }]
        },
        options: {
          legend: {display: true},
          scales:{
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Time (Seconds)'
                },
                ticks: {
                    display: false 
                }
            }],
            yAxes: [{
                display: true, 
                scaleLabel: {
                    display: true,
                    labelString: 'Bit Rate (Kbps)'
                }
            }]
        }
        }
    });
})