'use strict';

var express = require('express'),
    bodyParser = require('body-parser')
    // Realm = require('realm');


var app = express();

let PostSchema = {
    name: 'Post',
    properties: {
        timestamp: 'date',
        title: 'string',
        content: 'string'
    }
};

// var blogRealm = new Realm({
//     path: 'blog.realm',
//     schema: [PostSchema]
// });

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/write', function(req, res) {
    res.sendFile(__dirname + "/write.html");
});

app.post('/write', function(req, res) {
    res.send(req.body);
});

app.listen(3000, function() {
  console.log("Go!");
});






