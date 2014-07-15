var express = require('express');

var app = express();

app.use('/', express.static(__dirname + '/main'));

console.log('listening on port 8088');
app.listen(8081);