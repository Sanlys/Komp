var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var express = require('express');
var multer = require('multer');

const app = express();

app.use(express.static('public/'));

//Express middleware:

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'medie/');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage }).array('filetoupload', 20);

app.get('/', (req, res) => {
	res.sendFile('index.html')
});

app.post('/fileupload', (req, res) => {
	upload(req,res,function(err) {
		if(err) {
	    	return res.end("Error uploading file.");
	    }
	    res.end("File is uploaded");
	});
	res.redirect('/');
});
/*
app.listen(8080, () => {
	
});
*/

http.createServer(app).listen(8080, function () {
	
})