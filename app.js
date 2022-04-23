const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('libs'));
app.use(express.static('src'));
app.use(express.static('videos'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/favicon.ico', function (req, res) {
    res.sendFile('/favicon.ico', {root: __dirname});
});

app.get('/style.css', function (req, res) {
    res.sendFile('style.css', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 