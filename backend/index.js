var debug = require('debug')('frontend-code-challenge');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('./lib/logger');
var cors  = require('cors')

var items = require('./routes/items');

var app = express();
var log = logger(app);

var corsOptions = {
    origin: 'http://localhost:3002',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:3002"); //you can change it with your own
//     res.header('Access-Control-Allow-Headers', true);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/items', items);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    log.error(err);
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    log.info('Express server listening on http://localhost:%d', server.address().port);
});