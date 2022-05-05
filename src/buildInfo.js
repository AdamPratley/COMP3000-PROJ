function buildInfo(res){
    var xValues = JSON.parse(res.xValues);
    var redY = JSON.parse(res.redY);
    var greenY = JSON.parse(res.greenY);
    dataChart = initChart(xValues,redY,greenY);
}

module.exports = buildInfo;