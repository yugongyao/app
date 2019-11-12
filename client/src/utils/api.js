export const HOST = 'http://localhost:3000'


// 发送验证码   get
const SEND_CODE_API = '/api/user/send_code';

const REGIESTER_API = '/api/user/regiester';

const LOGIN_API = '/api/user/login';

const CHECK_LOGIN = '/api/user/check_login';

// 首页请求动态
const REQUEST_MOMENTS = '/api/home/moment_list';

export default {
    SEND_CODE_API,
    REGIESTER_API,
    LOGIN_API,
    CHECK_LOGIN,
    REQUEST_MOMENTS
}