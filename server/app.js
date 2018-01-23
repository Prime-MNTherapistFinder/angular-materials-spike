var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var diagnoses = require('./routes/diagnoses');

app.use(express.static('server/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.use('/diagnoses', diagnoses)

app.listen(port, function() {
    console.log('Listening on port: ', port);
});