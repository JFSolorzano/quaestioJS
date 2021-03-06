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

app.post('/prueba/:tmpcollection', function(req, res){
	var tmpcollection = req.params.tmpcollection;
	db.collection(tmpcollection).insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/prueba/:tmpcollection/:value', function(req, res){
	var tmpcollection = req.params.tmpcollection;
	var value = req.params.value;
	// db.collection(tmpcollection).remove({_id: mongojs.ObjectId(id)}, function(err, doc){
	// 	res.json(doc);
	// });
	db.collection(tmpcollection).remove({field: value}, function(err, doc){
		res.json(doc);
	});
});

app.get('/prueba/:tmpcollection/:value', function(req, res){
	var tmpcollection = req.params.tmpcollection;
	var value = req.params.value;
	// db.collection(tmpcollection).findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
	// 	res.json(doc);
	// });
	db.collection(tmpcollection).findOne({field: value}, function(err, doc){
		res.json(doc);
	});
});

app.put('/prueba/:tmpcollection/:value', function(req, res){
	var tmpcollection = req.params.tmpcollection;
	var value = req.params.value;
	// db.collection(tmpcollection).findAndModify({
	// 	query: {_id: mongojs.ObjectId(id)},
	// 	update: {$set: req.body},
	// 	new: true
	// }, function(err, doc){
	// 	res.json(doc);
	// });
	db.collection(tmpcollection).findAndModify({
		query: {field: value},
		update: {$set: req.body},
		new: true
	}, function(err, doc){
		res.json(doc);
	});
});

module.exports = app;