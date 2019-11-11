
const nodemailer = require('nodemailer');

var Email= {
    config: {
        host: 'smtp.163.com',
        // secureConnection: true, // use SSL
        port: 25,
        // secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'blossomyclover@163.com',
            pass: 'juan0204'
        }
    },
    get transporter(){
        return nodemailer.createTransport(this.config);
    },
    get code(){
        // 四位验证码
        return Math.random().toString().substring(2,6);
    }
}

module.exports = {
    Email
}