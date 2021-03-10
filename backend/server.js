////////////////////////////////////////////////////////////////////
var dotenv = require('dotenv');
dotenv.config({ path: './env/config.env' });
////////////////////////////////////////////////////////////////////

var express = require('express'), 
    http = require('http'),
    logger = require('./logger');

var app = require('./app');
var server = http.createServer(app); 

//서버 시작
server.listen(app.get('port'), () => {
    logger.info('[server] server started, pid : ' + process.pid);
  });