var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var app = express.Router();
var db = mongojs('quaestioJS', ['quaestioJS']);

app.use(bodyParser.json());

app.get('/prueba/:tmpcollection', function(req, res){
	var tmpcollection = req.params.tmpcollection;
	db.collection(tmpcollection).find(function(err, docs){
		res.json(docs);
	});
});

app.post('/prueba', function(req, res){
	db.quaestioJS.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/prueba/:id', function(req, res){
	var id = req.params.id;
	db.quaestioJS.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.get('/prueba/:id', function(req, res){
	var id = req.params.id;
	db.quaestioJS.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/prueba/:id', function(req, res){
	var id = req.params.id;
	db.quaestioJS.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {nombre: req.body.nombre, apellido: req.body.apellido, email: req.body.email}},
		new: true
	}, function(err, doc){
		res.json(doc);
	})
});

module.exports = app;