export const HOST = 'http://10.20.152.4:8080'


// 发送验证码   get
const SEND_CODE_API = '/api/user/send_code';

const REGIESTER_API = '/api/user/regiester';

const LOGIN_API = '/api/user/login';

const CHECK_LOGIN = '/api/user/check_login';

// 请求个人信息
const REQUEST_USERINFO = '/api/user/userinfo'

// 首页请求动态
const REQUEST_MOMENTS = '/api/home/moment_list';

// 热门话题
const HOT_ISSUES = '/api/home/hot_issue'

// 推荐用户
const STAR_USERS = '/api/recommend_users'

export default {
    HOST,
    SEND_CODE_API,
    REGIESTER_API,
    LOGIN_API,
    CHECK_LOGIN,
    REQUEST_USERINFO,
    REQUEST_MOMENTS,
    HOT_ISSUES,
    STAR_USERS
}