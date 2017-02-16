
	var middleware={
	requireAuthentication: function(req,res,next){
		console.log("private rout hit");
		next();
	},
	logger: function(req, res,next){
		console.log('Date: ' + new Date().toString()+ ' Request: '+ req.method + ' '+ req.originalUrl);
		next()
	}
};
module.exports=middleware;