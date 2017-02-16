var express = require ('express');
var app= express();
var port= 3000;

var middleware ={
	requireAuthentication: function(req,res,next){
		console.log("private rout hit");
		next();
	},
	logger: function(req, res,next){
		console.log('Date: ' + new Date().toString()+ ' Request: '+ req.method + ' '+ req.originalUrl);
		next()
	}
};
app.use(middleware.logger);
app.get('/about', function(req, res){
res.send('its all about us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port,function(){
	console.log('Server started at port '+ port);
});