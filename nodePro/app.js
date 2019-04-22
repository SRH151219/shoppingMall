//引入核心模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入中间件（必须在express前引入）
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var allRouter = require('./routes/all');
var goodsRouter = require('./routes/goodsManage/goods');
//创建express实例，中间件必须在express实例之后使用
var app = express();

// view engine setup
// __dirname：当前目录的绝对路径/
//path.join()路径拼接，拼接后的路径为/views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//使用中间件，app.use()专门用来使用中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//所有静态文件的地址（所有的静态文件放在public中）
app.use(express.static(path.join(__dirname, 'public')));

//根据路由，使用相应的中间件
app.use('/users', usersRouter);
//
app.use('/all', allRouter);
//当路径为/goods时，使用goodsRouter路由
app.use('/goods',goodsRouter);
app.use('/mall',goodsRouter);

// catch 404 and forward to error handler
// 当服务器的状态码为404，请求不到资源时执行的函数
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//当服务器500或者其他错误时执行的函数
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//导出中间件
module.exports = app;
