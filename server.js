var express = require('express');
var app     = express();

// Setting up the port number using ECMA6
let port = process.env.PORT || 8080;

var sassMiddleware = require('node-sass-middleware');
var path = require('path');

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));


// Default route (index.js)
app.get('/',function(req,res){
	res.render('index');
})

// Listing to port 
app.listen(port , function(){
	console.log(`Listening at port ${port}`);
})
