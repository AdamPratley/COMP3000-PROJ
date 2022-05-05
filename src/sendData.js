function sendData(item){
    var xhr = new XMLHttpRequest();

    var url = "/api/v1/post";
    xhr.open("POST", url,true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(item));
}

module.exports = sendData;