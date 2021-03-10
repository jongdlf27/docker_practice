////////////////////////////////////////////////////////////////////
var dotenv = require('dotenv');
dotenv.config({ path: './env/config.env' });
////////////////////////////////////////////////////////////////////

/*기본적으로 node 웹 서버에는 아무것도 없기 때문에 express module을 사용해서 router와 middleware를 하나씩 추가하여 사용한다.*/
var express = require('express'),
    http = require('http'),
    path = require('path'),//경로 
    static = require('serve-static'),//위치 설정 
    cookieParser = require('cookie-parser'),//쿠기 설정
    cors = require('cors'),//cross origin resource sharing
    bodyParser = require('body-parser'); //json 을 파싱할 수 있게 해준다.

var app = express(); 

app.set('port',process.env.PORT || process.env.HOST_PORT); //포트설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 
app.get('/',(req,res) => {
    res.send('hello12312331223123132!');
});

//모듈로 분리하여 server.js에서 사용한다.
module.exports = app;
