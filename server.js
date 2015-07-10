var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require('express-session')
var app = express();

app.use(express.static(__dirname + "/public/"));

app.use(require('./public/backend/controllers/rest/expressmysql'));
app.use(require('./public/backend/controllers/rest/expressmongo'));

app.use(cookieParser());

app.use(session({secret: 'ssshhhhh'}));

app.use(bodyParser.json());

function setVariable(session, data, res){
    session[data.variable] = data.value;
    res.json(data.variable+" setted with: "+data.value+".");
}

function getVariable(session, data, res){
    res.json(session[data.variable]);
}

function getAll(session, res){
	res.json(session);
}

function unsetVariable(session, data, res){
    delete session[data.variable];
    res.json(data.variable+" unsetted.");
}

function destroySession(session, res){
    session.destroy();
    res.json("Session destroyed.");
}

app.post('/Session/:action', function (req, res) {
	var session = req.session;
	var data = req.body;
    var action = req.params.action;
    switch(action){
    	case "set":
    	setVariable(session, data, res);
    	break;
    	case "get":
    	getVariable(session, data, res);
    	break;
    	case "getAll":
    	getAll(session, res);
    	break;
    	case "unset":
    	unsetVariable(session, data, res);
    	break;
    	case "destroy":
    	destroySession(session, res);
    	break;
    } 
});


app.listen(3000);
console.reset = function () {
  return process.stdout.write("\033c");
}
console.log("\033c");
console.log("");
console.log("Welcome to quaestio Server, listening on port 3000:");
console.log("");
