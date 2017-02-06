var express = require('express');
var app = express();

app.use(express.static(__dirname+"/"))

var PORT= process.env.PORT || 4000;

app.listen(4000,function(){
	console.log("server running on port 4000")
});
module.exports = app;