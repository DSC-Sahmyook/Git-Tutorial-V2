var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var APIRoute = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// HTML을 파일로 사용
app.set('view engine', 'ejs');
app.engine("html", require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// bower 항목을 불러올 수 있도록 주소를 추가
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/', indexRouter);
app.use("/api",APIRoute.router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
