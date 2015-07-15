var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express.Router();

app.use(bodyParser.json());

var pool = mysql.createPool({
    connectionLimit: 1000,
    host: 'localhost',
    user: 'FRONTEND',
    password: 'P7K9',
    database: 'quaestio_frontend',
    debug: false
});

function executequery(req, res) {
    try {
        pool.getConnection(function (err, connection) {
            connection.query(req, function (err, result) {
                if (!err) {
                    res.json(result);
                } else {
                    res.json(err);
                }
            });
            connection.release();
        });
    } catch (err) {
        res.json(err);
    }
}

function executepstm(query, req, res) {
    var tmpdata = req;
    try {
        pool.getConnection(function (err, connection) {
            var consulta = connection.query(query + " ?", tmpdata, function (err, result) {
                connection.release();
                if (!err) {
                    res.json(result);
                } else {
                    res.json(err);
                }
            });
            console.log(consulta.sql);
        });
    } catch (err) {
        res.json(err);
    }
}

function executepstmwhere(query, where, req, res) {
    var tmpdata = req;
    try {
        pool.getConnection(function (err, connection) {
            var consulta = connection.query(query + " ? " + where, tmpdata, function (err, result) {
                connection.release();
                if (!err) {
                    res.json(result);
                } else {
                    res.json(err);
                }
            });
            console.log(consulta.sql);
        });
    } catch (err) {
        res.json(err);
    }
}

app.post('/quaestioJS/:query', function (req, res) {
    console.log("POST - '" + req.params.query);
    var query = req.params.query;
    executepstm(query, req.body, res);
});

app.post('/quaestioJS/:query/:where', function (req, res) {
    console.log("PUT - '" + req.params.query + " " + req.params.where);
    var query = req.params.query;
    var where = "WHERE " + req.params.where;
    executepstmwhere(query, where, req.body, res);
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
