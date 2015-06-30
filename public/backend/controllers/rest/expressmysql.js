var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express.Router();

app.use(bodyParser.json());

var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quaestio_frontend',
    debug: false
});

function executequery(req, res) {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(req, function (err, result) {
                connection.release();
                if (!err) {
                    res.json(result);
                }
            });
        });
    } catch (err) {
        res.json(err);
    }
}

function executepstm(query, req, res) {
    try {
        var tmpdata = req.body;
        pool.getConnection(function (err, connection) {
            connection.query(query, tmpdata, function (err, result) {
                connection.release();
                if (!err) {
                    res.json(result);
                }
            });
        });
    } catch (err) {
        res.json(err);
    }
}


app.post('/quaestioJS/:query', function (req, res) {
    console.log("POST OR PUT - '" + req.params.query + "'");
    var query = req.params.query;
    res.json(req.body);
    //executepstm(query, req, res);
});

app.delete('/quaestioJS/:query', function (req, res) {
    console.log("DELETE - '" + req.params.query + "'");
    var query = req.params.query;
    executequery(query, res);
});

app.get('/quaestioJS/:query', function (req, res) {
    console.log("GET - '" + req.params.query + "'");
    var query = req.params.query;
    executequery(query, res);
});

module.exports = app;