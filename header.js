
var express  = require('express');
var app      = express();
var ip;
var lang     ='';
var platform ='';

app.get('/',function(req,response){
    
    var regExp  = /\(([^)]+)\)/;
    var matches = regExp.exec(req.headers['user-agent']); //stract () from user-agent



    ip          = req.headers['x-forwarded-for'];               //ip for browser
    platform    = matches[1];                                   //o.s
    lang        = req.headers['accept-language'].split(',')[0]; //language
    
    response.send({'ipaddress':ip,'language':lang ,'Sofware':platform});
    
   
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});