## 用户

#### 发送验证码

**method:** post

**url:** /api/user/send_code

**参数:** tel   

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 注册

**method:** post

**url:** /api/user/regiester

**参数:** tel   password

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```



#### 登录

**method:** post

**url:** /api/user/login

**参数:** tel   type('code', 'password' )  value   

**返回值:**

```json
{
	message: 'ok',
  code: 0,
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
	message: 'ok',
  code: 0,
  data: null
}
```



登录退出

**method:** get

**url:** /api/user/logout

**参数:** 无

**返回值:**

```json
{
	message: 'ok',
  code: 0,
  data: null
}
```










