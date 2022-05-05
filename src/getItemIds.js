function getItemIds(){
    fetch("/api/v1/getids")
    .then(data=>{return data.json()})
    .then(res=>{buildOptions(res)});
}

module.exports = getItemIds();