function initChart(xValues, redY, greenY){
    return new Chart("dataChart", {
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
}

module.exports = initChart;