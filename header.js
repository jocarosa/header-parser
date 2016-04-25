
var express = require('express');
var app = express();
var ip;
var lang='';
var platform='';

app.get('/',function(require,response){
    
    ip=         require.headers['x-forwarded-for'];//ip for browser
    platform =  require.headers['user-agent'].split('()')[0];//
    lang=       require.headers['accept-language'].split(',')[0];//language
    
    response.send(JSON.stringify({'ipaddress':ip,'language':lang ,'Sofware':platform}));
    
   
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});