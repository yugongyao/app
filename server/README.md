## 用户

#### 发送验证码

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



#### 注册

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



#### 登录

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

#### 检查登录是否过期

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



