function delById(){
    fetch(("/api/v1/delbyid/"+select.value))
        .then(data=>{return data.json()})
        .then(res=>{getItemIds();})
}

module.exports = delById;