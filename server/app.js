// 短轮询   http
// 每隔1s中向服务器发送一次请求。
// 问服务器是否有人给我发送信息。

// 长轮询   http
// 设置请求的超时时间，越长越好。


// websocket


const WebSocket = require('ws');


// 构建websocket通信服务器
const server = new WebSocket.Server({
    port: 9001
});

const arr = [];

// 监听客户端的连接
server.on('connection', (socket) => {
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