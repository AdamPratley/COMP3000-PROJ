function buildOptions(data){
    select.innerHTML = "";
    for (var i =0; i <data.length;i++){
        addOption(data[i]);
    }
};

module.exports = buildOptions;