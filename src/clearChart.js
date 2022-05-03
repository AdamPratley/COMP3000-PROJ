function clearChart(dataChart){
    if (dataChart != null){
        dataChart.destroy();
        xValues = [];
        greenY = [];
        redY = [];
      }
}

module.exports = clearChart;