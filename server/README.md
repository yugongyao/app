## 用户

### 发送验证码

**method:** get

**url:** /api/user/send_code/

**参数:** email
**返回值:**

```json
{
	msg: '验证码发送成功 || 验证码发送失败 || 邮箱为空'
  code: 0 || -1 || -2,
  data: null
}
```



### 注册

**method:** post

**url:** /api/user/regiester

**参数:** username email password  code

**返回值:**

```json
{
	msg: '注册成功 || 验证码错误 || 注册失败',
  code: 0 || -1 || -2,
  data: null
}
```



### 登录

**method:** post

**url:** /api/user/login

**参数:** email password   

**返回值:**

```json
{
	msg: 'ok || 用户名或密码错误 || 用户名不存在 || 数据库错误请重试',
  status: 0 || -1 || -2 || -3,
  data: null
}
```

### 检查登录是否过期

**method:** get

**url:** /api/user/check_login

**参数:** 无

**返回值:**

```json
{
	msg: '没过期 || 已过期',
  status: 0 || -1,
  data: null
}
```



### 登出

**method:** get

**url:** /api/user/logout

**参数:** 无

**返回值:**

```json
{
	msg: 'ok',
  status: 0,
  data: null
}
```


### 获取首屏动态

**method:** get

**url:** /api/home/moment_list

**参数:** 无

**返回值:**

```json
{
	msg: 'ok',
  status: 0,
  data: [
    5个
      { username: 'clheebe',
       icon: '../public/images/icon-default.png',
       id: 1,
       text: '期学千二公采一内去空东低四接拉示求。',
       picArr: 数组内有随机1-4个图片链接 [ 'http://dummyimage.com/50x50', 'http://dummyimage.com/50x50' ],
       comments: 1-10,
       likes: 1-50 },
  ]
}
```


### 获取首屏热门话题

**method:** get

**url:** /api/home/hot_issues

**参数:** 无

**返回值:**

```json
{ msg: 'ok',
  status: 0,
  data:
   [ { title: '里', bg: '/assets/pic4.jpg', rank: 1 },  
     { title: '或无', bg: '/assets/pic1.jpg', rank: 2 },
     { title: '话', bg: '/assets/pic2.jpg', rank: 3 },  
     { title: '容织', bg: '/assets/pic2.jpg', rank: 4 } ] }
```

### 推荐用户

**method:** get

**url:** /api/recommend_users

**参数:** 无

**返回值:**

```json
{ msg: 'ok',
  status: 0,
  data: 9个
   [ { title: '里', bg: '/assets/pic4.jpg', rank: 1 },  
     { title: '或无', bg: '/assets/pic1.jpg', rank: 2 },
     { title: '话', bg: '/assets/pic2.jpg', rank: 3 },  
     { title: '容织', bg: '/assets/pic2.jpg', rank: 4 } ] }
```