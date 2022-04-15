const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/main.js', function (req, res) {
    res.sendFile('main.js', {root: __dirname});
});

app.get('/libs/Chart.min.js', function (req, res) {
    res.sendFile('/libs/Chart.min.js', {root: __dirname});
});

app.get('/libs/dash.all.min.js', function (req, res) {
    res.sendFile('/libs/dash.all.min.js', {root: __dirname});
});

app.get('/style.css', function (req, res) {
    res.sendFile('style.css', {root: __dirname});
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 