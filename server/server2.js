const express = require('express');
const userRouter = require('./routes/userRouter')
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
// var bodyParser = require("body-parser");

const homeRouter = require('./routes/homeRouter')

// const {} = require('./utils/config')


const server = express();
// paser('this is a string key');

// parse application/x-www-form-urlencoded
// server.use(bodyParser.urlencoded({
//   extended: false
// }))
// parse application/json
// server.use(bodyParser.json())
// server.use(express.urlencoded({
//   urlencoded: false,
//   extended: true
// }));

//设置允许跨域访问该服务.
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});



// var store = new MongoDBStore({
//   uri: 'mongodb://localhost:27017/account',
//   collection: 'session'
// });
server.use(session({
  secret: 'this is a string key', // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
  name: 'code_session',
  /*保存在本地cookie的一个名字 默认connect.sid  可以不设置*/
  resave: false,
  /*强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。*/
  saveUninitialized: true, //强制将未初始化的 session 存储。  默认值是true  建议设置成true
  cookie: {
    maxAge: 1000 * 30 * 60 /*过期时间*/

  },
  /* secure:true  https这样的情况才可以访问cookie */
  // rolling: true, //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
  store: new MongoDBStore({
    uri: 'mongodb://localhost:27017/account', //数据库的地址  shop是数据库名
    collection: 'session'
    // touchAfter: 24 * 3600 // 通过这样做，设置touchAfter:24 * 3600，您在24小时内只更新一次会话，不管有多少请求(除了在会话数据上更改某些内容的除外)
  })
}));

// 处理请求
server.use('/api/user', userRouter);
server.use('/api/home', homeRouter);
server.use('/api/recommend_users', (req,res)=>{
  const {starUsers} = require('./model/mockData')
  if(starUsers){
    res.json(starUsers);
  }
  else{
      res.json({
        msg: 'Missing data...',
        status: -1,
        data: null
      })
  }
})

// 静态资源
server.use(express.static(
  path.join(__dirname, 'public')
))



// 响应首页
server.use('/', (req, res)=>{
  res.sendFile( path.join(__dirname + '/public/index.html') );
});


// 连接数据库，连接成功再开启服务
mongoose.connect('mongodb://localhost:27017/account', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (error) {
    console.log('连接数据库失败：');
    console.log(error);
  } else {
    console.log('连接数据成功');
    // 启动成功
    server.listen('3000', (error) => {
      if (!error) {
        console.log('服务器启动成功:3000 port');
      } else {
        console.log('服务器启动失败：');
        console.log(error);
      }
    })
  }
})