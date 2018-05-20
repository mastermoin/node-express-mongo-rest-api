var express = require ("express");
var app = express();

require('./config/server.js')(app)
require('./config/db.js')(app)

app.get('/', function(req, res){
    res.send("Hello Moin");
});

app.listen(5000);

console.log("Node App is running on Port 5000.....");
