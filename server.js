var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public/"));

app.use(require('./public/backend/controllers/rest/expressmysql'));
app.use(require('./public/backend/controllers/rest/expressmongo'));

app.listen(3000);
console.reset = function () {
  return process.stdout.write("\033c");
}
console.log("\033c");
console.log("");
console.log("Welcome to quaestio Server, listening on port 3000:");
console.log("");
