const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql');
const nocache = require('nocache');

const port = 8080;

var jsonParser = bodyParser.json()

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "main",
    socketPath: "/var/run/mysqld/mysqld.sock"  
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})

app.use(express.static('libs'));
app.use(express.static('src'));
app.use(express.static('videos'));
app.use(nocache());

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/data', function (req, res) {
    res.sendFile('data.html', {root: __dirname});
});

app.get('/favicon.ico', function (req, res) {
    res.sendFile('/favicon.ico', {root: __dirname});
});

app.get('/style.css', function (req, res) {
    res.sendFile('style.css', {root: __dirname});
});

app.get('/config', function (req, res) {
    res.sendFile('config.json', {root: __dirname});
});

//API Routes

app.post('/api/v1/post',jsonParser,function (req,res) {
    content = req.body;
    con.query((`INSERT INTO sessions (link,xValues,greenY,redY) VALUES ("${content.link}","[${content.xValues}]","[${content.greenY}]","[${content.redY}]")`), function(err,result){
        if (err) throw err;
        res.send(result);
    });
});

app.get('/api/v1/getids',(req,res) =>{
    con.query("SELECT id FROM sessions", function(err,result){
        if (err) throw err;
        res.send(result);
    });
});

app.get('/api/v1/getbyid/:id',(req,res) =>{
    con.query(("SELECT * FROM sessions WHERE id ="+req.params.id), function(err,result){
        if (err) throw err;
        res.send(result);
    });
});

app.get('/api/v1/delbyid/:id',(req,res) =>{
    con.query(("DELETE FROM sessions WHERE id ="+req.params.id), function(err,result){
        if (err) throw err;
        res.send(result);
    });
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 

