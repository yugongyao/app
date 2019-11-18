var express = require('express');
var router = new express.Router();

// 引入user表的controller
var userCtrl = require('../controllers/userCtrl');

// 登录
router.post('/login', userCtrl.login)

// 注册
router.post('/regiester', userCtrl.regiester);

// 验证码
router.get('/send_code', userCtrl.emailVerify);

// 登录是否过期
router.get('/check_login', userCtrl.checkLogin)

// 退出登录
router.get('/logout', userCtrl.logout)

// 获取用户名
router.get('/userinfo', userCtrl.userInfo)

module.exports = router;
