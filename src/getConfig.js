function getConfig(){
    fetch("/config")
    .then(data=>{return data.json()})
    .then(res=>{config = res})
}

module.exports = getConfig;