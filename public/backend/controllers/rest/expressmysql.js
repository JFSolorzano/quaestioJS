var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express.Router();

app.use(bodyParser.json());

var pool = mysql.createPool({
	connectionLimit : 5, 
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'quaestio_frontend',
    debug    :  false
});

function executequery(req,res) {
	try{
		pool.getConnection(function(err,connection){         
        	connection.query(req,function(err,result){
            	connection.release();
            	if(!err) {
            		res.json(result);
            	}           
        	});
        });
	}catch(err){
		res.json(err);
	}
} 

function executepstm(req,res) {
	try{
		var query = req.body.query;
		var arr = req.body;
    var tmpdata = {};
		for(var key in arr){
      var attrName = key;
      var attrValue = arr[key];
      if(key != "query"){
        tmpdata[attrName] = attrValue;
      }
    }
		pool.getConnection(function(err,connection){
      connection.query(query, tmpdata, function(err, result) {
      	connection.release();
        	if(!err) {
         		res.json(result);
         	} 
			});
    });
	}catch(err){
		res.json(err);
	}
} 


app.get('/quaestioJS', function(req, res){
	console.log("GET - 'SELECT * FROM personas'");
	executequery("SELECT * FROM personas", res);
});

app.post('/quaestioJS', function(req, res){
	console.log("POST OR PUT - 'INSERT OR UPDATE personas'");
	executepstm(req, res);	
});

app.delete('/quaestioJS/:query', function(req, res){
	console.log("DELETE - 'DELETE FROM personas'");
  var query = req.params.query;
	executequery(query, res);
});

app.get('/quaestioJS/:query', function(req, res){
  console.log("GET - '"+req.params.query+"'");
	var query = req.params.query;
	executequery(query, res);
});

module.exports = app;