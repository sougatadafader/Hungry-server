var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); //for parsing application/json

app.use(bodyParser.urlencoded({ extended:true})); //for parsing application/x-www-form-urlencoded


const userService = require('./services/user.service.server');
userService(app);

sayHello= (req,res) => {
	res.send('hello world')
}

getHello= (req,res) => {
	const user = req.params['user']
	const message = req.query['message']
	res.send({	'user':user,
		        'message': message
				})
}




app.get('/hello', sayHello)
app.get('/hello/:user', getHello)



app.listen(3000);