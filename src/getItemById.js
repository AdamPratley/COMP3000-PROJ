function getItemById(){
    fetch(("/api/v1/getbyid/"+select.value))
        .then(data=>{return data.json()})
        .then(res=>{para.innerHTML = "Video Link: "+res[0].link;
        buildInfo(res[0]);});
}

module.exports = getItemById;