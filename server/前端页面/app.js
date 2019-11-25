var express = require('express');

var formData = require('./formData');



var app = express();

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use("/upload/img", formData())
const WebSocket = require('ws');


// 构建websocket通信服务器
const ws = new WebSocket.Server({
    port: 9000
});

const arr = [];

// 监听客户端的连接
ws.on('connection', (socket) => {
    console.log('有人上线了');
    arr.push(socket);

    socket.on('message', (data) => {
        //客户端发送的信息
        console.log(data);

        // 告诉其他的客户端该客户端发了什么信息
        arr.forEach(item => {
            item !== socket && item.send(data);
        })

    })

})
app.listen(4000, function () {
    console.log("4000port")
})