var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

//my module;
var heroes = require('./routes/heroes.js');

//middleware stuff;
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})
//bring in my route;
app.use('/heroes', heroes);

//mongoose stuff;
var databaseUri = 'mongodb://localhost:27017/omicron';

//connect to mongodb;
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose failed to connect because error: ', err);
});

//server stuff;
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});
