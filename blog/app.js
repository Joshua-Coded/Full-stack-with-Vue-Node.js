const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('logger');
const cookieParser =  require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const fs = require('file-system');

fs.readdirSync('controllers').forEach(function(file) {
    if (file.substr(-3) == '.js') {
	const route =  require('./controllers/' + file)
	route.controller(app)
    }
})


app.set('View', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err: {}

    res.status(err.status || 500);
    res.send('error');
})

app.listen(3000, function(){
   console.log('listening on 3000')
})

module.exports = app;
